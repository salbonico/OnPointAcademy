import React, { Component } from 'react';
import oplogo from './oplogo.png';
import { connect } from 'react-redux';
import './login.css';
import Loginbox from './Loginbox'
import { checkLoginSession } from './checkLoginSession'
import { withRouter } from 'react-router-dom'

class Login extends Component {
routeHome = () => this.props.history.push('/home')

  componentDidMount() {
    this.props.session2(this.routeHome)
      }

  render() {
    return(
<div className="loginpage">
<img src={oplogo} alt='oplogo' />
<div className="login">
  <div className="wrapper">
    <div className="message">
      <Loginbox />
    </div>
  </div>
</div>
</div>
  )}
};

const mapDispatchToProps = dispatch => {
  return {
    session2: (route) => {
      dispatch(checkLoginSession(route))
    }
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Login))
