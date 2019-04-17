import React, { Component } from 'react';
import logo from './logo.svg';
import oplogo from './oplogo.png';
import { connect } from 'react-redux';
import { fetchCourses } from './fetchCourses';
import './App.css';
import CoursesIndex from './CoursesIndex';
import Button from '@material-ui/core/Button';
import AppBar from './AppBar';
import { withRouter, Link } from 'react-router-dom'
import { logout } from './logout'

class Home extends Component {
routeLogin = () => this.props.history.push('/login')

  componentDidMount() {
    this.props.fetchCourses2()
      }

  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        {(this.props.user.name === undefined) ? this.routeLogin():console.log("User logged in")}
        <AppBar courses={this.props.courses} logout={this.props.logout2} routeLogin={this.routeLogin}/>
        <div className="space"></div>
        <p>Hello,{this.props.user.name}!</p>

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
    }
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
