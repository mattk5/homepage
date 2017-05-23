import React, { Component } from 'react';

import './body.css';

export default class Body extends Component {
	render() {
		return(
			<div id="project-container">
				<div className="project-header">
					<p id="header-title">Projects</p>
				</div>
				{this.props.projects.map(project => {
					const divBackground = {
						background: project.backgroundColor
					}
					return(
						<div className="each-project" style={divBackground}>
							<div className="project-info">
								<div className="each-title"><a href={project.url} id="project-link">{project.name}</a></div>
								<div className="project-description">{project.description}</div>
								<a className="source" href={project.source}>Source Code</a>
							</div>
						</div>
						)
				})}
			</div>
		)
	}
}