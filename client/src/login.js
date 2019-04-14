import React, { Component } from 'react';
import oplogo from './oplogo.png';
import { connect } from 'react-redux';
import './login.css';
import Button from '@material-ui/core/Button';
import Loginbox from './Loginbox'

class Login extends Component {

  render() {
    return(
<div>
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
