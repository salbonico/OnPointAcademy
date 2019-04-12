import React, { Component } from 'react';

export default class CoursesIndex extends Component {

renderCourses = () => this.props.courses.map((course) => <div><h3>{course.name}</h3> <h5>By: {course.teacher.name}</h5> <p>{course.description}</p></div>)


  render() {
    return(
      <div>
        {this.renderCourses()}
        {console.log("yessir!")}
        {console.log(this.props)}

      </div>
    );
  }
};
