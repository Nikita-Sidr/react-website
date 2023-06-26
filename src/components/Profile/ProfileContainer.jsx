import React from "react";
import Profile from "./Profile";
import { connect } from 'react-redux'
import { getStatus, getUserProfile, updateStatus } from '../../redux/profile-reducer'
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

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2//9245
    }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
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
        <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
})

export default compose(
  // withAuthRedirect,
  withRouter,
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus })
)(ProfileContainer)