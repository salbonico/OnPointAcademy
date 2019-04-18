import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCourses } from './fetchCourses';
import { checkSession } from './checkSession';
import './App.css';
import Dashboard from './dashboard'
import AppBar from './AppBar';
import { withRouter } from 'react-router-dom'
import { logout } from './logout'
import Course from './course'

class Home extends Component {
routeLogin = () => this.props.history.push('/login')

  componentDidMount() {
    this.props.fetchCourses2()
    this.props.checkSession2(this.routeLogin)
      }

  render() {

    if (!this.props.match.params.id){
    return (

      <div className="App">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

        <AppBar user={this.props.user.id} courses={this.props.courses} logout={this.props.logout2} routeLogin={this.routeLogin}/>
        <div className="space"></div>
      <Dashboard stateinfo={this.props} />


      </div>
    )}

    return (
      <div className="App">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

        <AppBar user={this.props.user.id} courses={this.props.courses} logout={this.props.logout2} routeLogin={this.routeLogin}/>
        <div className="space"></div>

        <Course course={this.props.courses.find(course => course.id === parseInt(this.props.match.params.id))}/>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    courses: state.courses.courses,
    user: state.user.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCourses2: () => {
      dispatch(fetchCourses())
    },
    logout2: (route) => {
      dispatch(logout(route))
    },
    checkSession2: (route) => {
      dispatch(checkSession(route))
    }
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
