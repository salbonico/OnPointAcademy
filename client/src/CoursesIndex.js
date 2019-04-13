import React, { Component } from 'react';
import Course from './course'
import './App.css';
import Typography from '@material-ui/core/Typography';
export default class CoursesIndex extends Component {

renderCourses = () => this.props.courses.map((course) => <div><Course course={course}/><br></br></div>)


  render() {
    return(
      <div>
        {this.renderCourses()}
      

      </div>
    );
  }
};
