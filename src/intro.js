import React, { Component } from 'react';

import './intro.css'

export default class Intro extends Component {
	render() {
		return(
			<div className="intro-main">
				<p id="intro-title">What I do</p>
				<div className="intro-body">
					<h3>Coding</h3>
					<p>I create things when given a computer. I love working in back-end development and dabble with front-end design & development as well.</p>
				</div>
				<div className="intro-body">
					<h3>Collaboration</h3>
					<p>With a passion for helping others, I enjoy working with people to help bring their dreams and ideas to life, staying by their side every step of the way.</p>
				</div>
				<div className="intro-body">
					<h3>Learning</h3>
					<p>I'm always enthusiastic about the opportunity to learn something new. Web development has helped me value knowledge so much more.</p>
				</div>
			</div>
			)
	}
}