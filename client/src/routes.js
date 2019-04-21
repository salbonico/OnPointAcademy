import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './home'
import Login from './login'




export default (
  <BrowserRouter>
    <Switch id='routes'>
      <Route exact path='/' render={ () =>   <Home /> }/>
      <Route path='/home' component={ () => <Home /> }/>
      <Route path='/login' component={ () => <Login />}/>
      <Route path="/courses/:id" component={(input) => <Home thing={input}/>} />
      <Route path="/profile" component={(input) => <Home thing={input}/>} />
    </Switch>
  </BrowserRouter>
)
