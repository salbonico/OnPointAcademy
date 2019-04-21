import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCourses } from './fetchCourses';
import { checkSession } from './checkSession';
import './home.css';
import Dashboard from './dashboard'
import AppBar from './AppBar';
import { withRouter } from 'react-router-dom'
import { logout } from './logout'
import Course from './course'
import { createComplete } from './createComplete'
import { destroyComplete } from './destroyComplete'
import { nextCourse } from './nextCourse'
import Loading from './loading'
import Editprofile from './editProfile'
import { updateProfile } from './updateProfile'

class Home extends Component {
routeLogin = () => this.props.history.push('/login');
testfunction = (course) => this.props.user.completes.find(function (complete) { return complete.course_id === course})?true:false
newfunction = (course) => this.props.courses.find(function(element) {return element.id === course})
courseId = (course) => course.id
routeBack = () => this.props.history.push('/home')
gaugefill = (completes,courses) => courses !== undefined && completes !== undefined ?Math.trunc((completes.length/courses.length)*100):1001

  componentDidMount() {
    this.props.fetchCourses2()
    this.props.checkSession2(this.routeLogin)
      }

  render() {
    if (!this.props.user.completes){
    return (
      <div><Loading /></div>
    )}

    if (!this.props.match.params.id && this.props.match.path !== "/profile"){
    return (
      <div className="App">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <AppBar user={this.props.user.id} courses={this.props.courses} logout={this.props.logout2} routeLogin={this.routeLogin}/>
        <div className="space"></div>
        <Dashboard stateinfo={this.props} gaugefill={this.gaugefill(this.props.user.completes,this.props.courses)} nextCourse= {nextCourse(this.props.user,this.props.courses)}/>
      </div>
    )}

    if (this.props.match.path === "/profile"){
    return (
      <div className="App">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <AppBar user={this.props.user.id} courses={this.props.courses} logout={this.props.logout2} routeLogin={this.routeLogin}/>
        <div className="space"></div>
        <Editprofile user={this.props.user} updateProfile = {this.props.updateProfile2} route={this.routeBack}/>
      </div>
    )}

    return (
      <div className="App">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <AppBar user={this.props.user.id} courses={this.props.courses} logout={this.props.logout2} routeLogin={this.routeLogin}/>
        <div className="space"></div>
        <Course nextCourse={nextCourse(this.props.user,this.props.courses)} route={this.routeBack} courseid={this.props.match.params.id} buttoncheck={this.testfunction(parseInt(this.props.match.params.id))} destroyComplete2={this.props.destroyComplete2} createComplete2={this.props.createComplete2} user={this.props.user} completes={this.props.user.completes} course={this.props.courses.find(course => course.id === parseInt(this.props.match.params.id))}/>
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
    },
    createComplete2: (data, route) =>{
      dispatch(createComplete(data,route))
    },
    destroyComplete2: (data, route) => {
      dispatch(destroyComplete(data,route))
    },
    updateProfile2: (data, route) => {
      dispatch(updateProfile(data,route))
    }
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
