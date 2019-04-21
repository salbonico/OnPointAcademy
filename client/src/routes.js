import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/courses/homecontainer'
import Login from './components/login/logincontainer'




export default (
  <BrowserRouter>
    <Switch id='routes'>
      <Route exact path='/' render={ () =>   <Home /> }/>
      <Route path='/home' component={ () => <Home /> }/>
      <Route path='/login' component={ () => <Login />}/>
      <Route path="/courses/:id" component={(input) => <Home route={input}/>} />
      <Route path="/profile" component={(input) => <Home route={input}/>} />
    </Switch>
  </BrowserRouter>
)
