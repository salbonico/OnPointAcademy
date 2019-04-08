import React, { Component } from 'react';
import { render } from 'react-dom';
import logo from './logo.svg';
import './App.css';

class Logostuff extends Component {

  render() {
      return <div className = "otherthing">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={() => {this.handleClick()}}>
          Edit and save to reload.
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

}}
export default Logostuff;
