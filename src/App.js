import React, { Component } from 'react';
import Header from './header';
import Body from './body';
import projects from './data/projects';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
          <Header />
          <Body projects={projects} />
        <p className="App-intro">
          About Me.
        </p>
      </div>
    );
  }
}
