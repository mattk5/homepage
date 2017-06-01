import React, { Component } from 'react';

import './intro.css'

export default class Intro extends Component {
	render() {
		return(
			<div className="intro-main">
				<p id="intro-title">What I do</p>
				<div className="intro-body">
					<h3>Coding</h3>
					<p>Give me a computer and I create things! I love working in back-end development and dabbling with front-end design and development as well.</p>
				</div>
				<div className="intro-body">
					<h3>Collaboration</h3>
					<p>With a passion for helping others, I enjoy working with people to bring their dreams and ideas to life, staying by their side every step of the way.</p>
				</div>
				<div className="intro-body">
					<h3>Learning</h3>
					<p>I am enthusiastic when given the opportunity to learn something new. I value knowledge more since I have begun working in Web Development.</p>
				</div>
			</div>
			)
	}
}