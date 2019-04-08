import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Slide from './Slide'
import Cards from './Cards'
import Logostuff from './Logostuff'
import Accordion from './Accordion'

class App extends Component {
constructor(props){
  super(props);
  this.slideElement = React.createRef();
}

handleClick = () => {
  this.slideElement.current.openLeftPanel()
}

  render() {
    return (
      <div className="App">

        <div className="thingtest">

        </div>

        <Cards />
          <Slide ref={this.slideElement}/>

        <div className="space"></div>

        <Logostuff />



      </div>
    );
  }
}

export default App;
