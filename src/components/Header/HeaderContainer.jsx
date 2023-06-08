import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAutUserData } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount(){
  this.props.getAutUserData()
  }  
  
  render(){
      return (
        <Header {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})
export default connect(mapStateToProps,{getAutUserData})(HeaderContainer)