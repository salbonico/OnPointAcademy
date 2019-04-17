import React, { Component } from 'react';
import oplogo from './oplogo.png';
import { connect } from 'react-redux';
import './login.css';
import Button from '@material-ui/core/Button';
import Loginbox from './Loginbox'
import Typography from '@material-ui/core/Typography';
import { checkLoginSession } from './checkLoginSession'
import { withRouter, Link } from 'react-router-dom'

class Login extends Component {
routeHome = () => this.props.history.push('/home')

  componentDidMount() {
    this.props.session2(this.routeHome)
      }

  render() {
    return(
<div class="loginpage">
<img src={oplogo} alt='oplogo' />
<div class="login">
  <div class="wrapper">
    <div class="message">
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
