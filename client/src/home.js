import React, { Component } from 'react';
import logo from './logo.svg';
import oplogo from './oplogo.png';
import { connect } from 'react-redux';
import { fetchCourses } from './fetchCourses';
import './App.css';
import CoursesIndex from './CoursesIndex';
import Button from '@material-ui/core/Button';
import ButtonAppBar from './AppBar';

class Home extends Component {

  componentDidMount() {
    this.props.fetchCourses2()
      }

  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

        <ButtonAppBar />
        <div className="space"></div>
        <p>This is home.js</p>


        <CoursesIndex className="list" courses={this.props.courses}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={oplogo} alt='oplogo' />
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
export default connect(mapStateToProps, mapDispatchToProps)(Home)
