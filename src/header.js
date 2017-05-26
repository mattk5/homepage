import React, { Component } from 'react';

import './header.css';

import resume from './pictures/mkubota_resume.pdf'

export default class Header extends Component {
	render() {
		return(
			<div className="header-main">
				<p id="header-name">Hi! I'm Matt Kubota</p>  
				<nav className="header-links">
					<ul>
						<li><a href="#about" className="links">About Me</a></li>
						<li><a href={resume} target="_blank" className="links">My Resume</a></li>
						<li><a href="mailto:mattkubota5@gmail.com?subject=Creating%20Together!" className="links">Email Me</a></li>
					</ul>
				</nav>
			</div>
			);
	}
}