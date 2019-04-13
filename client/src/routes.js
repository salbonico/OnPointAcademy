import React from 'react'
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom'
import loginbg from './loginbg.jpg';
import Home from './home'
import Login from './login'
const imgMyimageexample = require('./loginbg.jpg');


export default (
  <BrowserRouter>
    <Switch id='routes'>
      <Route exact path='/' render={ () =>   <Home /> }/>
      <Route path='/home' component={ () => <Home /> }/>
      <Route path='/login' component={ () => <Login />}/>
    </Switch>
  </BrowserRouter>
)
