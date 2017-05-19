import React, { Component } from 'react';
import Header from './header';
import Body from './body';
import About from './about';
import projects from './data/projects';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="container">
          <Header />
          <Body projects={projects} />
          <About />
      </div>
    );
  }
}
