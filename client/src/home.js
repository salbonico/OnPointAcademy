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
import Button from '@material-ui/core/Button'
import DoneIcon from '@material-ui/icons/Done';
import Typography from '@material-ui/core/Typography';
import { createComplete } from './createComplete'
import { nextCourse } from './nextCourse'

class Home extends Component {
routeLogin = () => this.props.history.push('/login');
testfunction = (course) => this.props.user.completes.find(function (complete) { return complete.course_id === course})?true:false
newfunction = (course) => this.props.courses.find(function(element) {return element.id === course})
courseId = (course) => course.id
routeBack = () => this.props.history.push(`/home`)

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
      <Dashboard stateinfo={this.props} nextCourse= {nextCourse(this.props.user,this.props.courses)}/>

      </div>
    )}

    if (!this.props.user.completes){
    return (
      <div>Loading...</div>
    )}

    return (
      <div className="App">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        {console.log(this.newfunction(parseInt(this.props.match.params.id)))}

        <AppBar user={this.props.user.id} courses={this.props.courses} logout={this.props.logout2} routeLogin={this.routeLogin}/>
        <div className="space"></div>

        <Course status={true} user={this.props.user} completes={this.props.user.completes} course={this.props.courses.find(course => course.id === parseInt(this.props.match.params.id))}/>

        {this.props.user.completes && !this.testfunction(parseInt(this.props.match.params.id)) &&
        <Button variant="contained" onClick={() => this.props.createComplete2({course_id:this.props.match.params.id},this.routeBack)} style={{background: '#D23D2F',color:'#FAFAFA',marginTop:'10px'}}><Typography variant="h4" style={{fontWeight:'300', color:'white'}} noWrap>Mark Completed</Typography></Button>
        }

        {this.props.user.completes && this.testfunction(parseInt(this.props.match.params.id)) &&
        <Button variant="contained" style={{background: 'green',marginTop: '10px', color:'white'}}><DoneIcon style={{marginRight:'5px'}}/><Typography style={{fontWeight:'300', color:'white'}} variant="h4" noWrap> Completed</Typography></Button>
        }
        {this.props.user && console.log(nextCourse(this.props.user,this.props.courses))}
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
    createComplete2: (data,route) =>{
      dispatch(createComplete(data,route))
    }
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
