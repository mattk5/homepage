import React, { Component } from 'react';

import './body.css';

export default class Body extends Component {
	render() {
		return(
			<div>
				<div className="project-header">
					<p id="header-title">Projects</p>
				</div>
				{this.props.projects.map(project => {
					const divBackground = {
						background: project.backgroundColor
					}
					return(
						<div className="each-project" style={divBackground}>
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