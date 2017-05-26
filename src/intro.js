import React, { Component } from 'react';

import './intro.css'

export default class Intro extends Component {
	render() {
		return(
			<div className="intro-main">
				<p id="intro-title">What I do</p>
				<div className="intro-body">
					<h3>Coding</h3>
					<p>I love creating things from scratch as well contributing to open source.</p>
				</div>
				<div className="intro-body">
					<h3>Collaboration</h3>
					<p>With a passion for helping others, I enjoy collaborating on bringing people's dreams to life.</p>
				</div>
				<div className="intro-body">
					<h3>Learning</h3>
					<p>I treat every oppportunity as a learning experience. There's always something new to learn.</p>
				</div>
			</div>
			)
	}
}