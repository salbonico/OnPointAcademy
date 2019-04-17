import React from 'react'
import { coursePage } from './coursePage'
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
      <Route path="/courses/:id" component={(input) => <Home thing={input}/>} />
    </Switch>
  </BrowserRouter>
)
