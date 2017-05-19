import React, { Component } from 'react';

import './header.css';

export default class Header extends Component {
	render() {
		return(
			<div className="header">
				Matt Kubota | Web Developer 
			<nav className="header-links">
				<ul>
					<li>Projects</li>
					<li>About</li>
					<li>Resume</li>
					<li>Email</li>
				</ul>
			</nav>
			</div>
			);
	}
}