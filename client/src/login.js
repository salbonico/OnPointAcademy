import React, { Component } from 'react';
import oplogo from './oplogo.png';
import { connect } from 'react-redux';
import './login.css';
import Button from '@material-ui/core/Button';
import Loginbox from './Loginbox'
import Typography from '@material-ui/core/Typography';

class Login extends Component {

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


export default Login
