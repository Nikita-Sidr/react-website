import React from "react";
import Profile from "./Profile";
import { connect } from 'react-redux'
import { getStatus, getUserProfile, updateStatus, savePhoto } from '../../redux/profile-reducer'
import { useParams } from 'react-router-dom'
// import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";



export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />
  }
}

class ProfileContainer extends React.Component {

  refreshProfile(){
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.authorizedUserId
    }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate (prevProps, prevState) {
    if(prevProps.status!==this.props.status){
        this.setState({
          status: this.props.status
        })
    }
  }

  render() {
    return (
      <div>
        <Profile {...this.props} 
        isOwner = {!this.props.userId}
        profile={this.props.profile}
         status={this.props.status}
         savePhoto={this.props.savePhoto}
          updateStatus={this.props.updateStatus} />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,

})

export default compose(
  // withAuthRedirect,
  withRouter,
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto })
)(ProfileContainer)