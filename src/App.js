import React, { Component } from 'react';
import Header from './header';
import Intro from './intro';
import Body from './body';
import About from './about';
import Footer from './footer';
import projects from './data/projects';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="container">
          <Header />
          <Intro />
          <Body projects={projects} />
          <About />
          <Footer />
      </div>
    );
  }
}
