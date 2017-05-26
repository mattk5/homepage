import React, { Component } from 'react';

import './body.css';

export default class Body extends Component {
	render() {
		return(
			<div className="container body-main">
				<div className="project-header">
					<p id="header-title">Projects I've worked on.</p>
				</div>
				{this.props.projects.map(project => {
					return(
						<div className="each-project">
							<div className="each-title"><a href={project.url} className="each-link">{project.name}</a></div>
							<div className="each-description">{project.description}</div>
							<a className="each-source" href={project.source}>Source Code</a>
						</div>
						)
				})}
			</div>
		)
	}
}