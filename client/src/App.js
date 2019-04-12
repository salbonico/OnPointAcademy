import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux'
import { fetchCourses } from './fetchCourses'
import './App.css';
import CoursesIndex from './CoursesIndex'

class App extends Component {

  componentDidMount() {
    this.props.fetchCourses2()
      }

  render() {
    return (
      <div className="App">
        <CoursesIndex courses={this.props.courses}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    courses: state.courses
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCourses2: () => {
      dispatch(fetchCourses())
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App)
