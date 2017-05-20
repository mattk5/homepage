import React, { Component } from 'react';

import './body.css';

// export default class Project extends Component {
// 	render() {
// 		return(
// 			<div className="App-project">
// 				<div className="App-project-title">
// 					Projects 
// 				</div>
// 				<div className="App-project-info">
// 					Find Me Here blah blah blah blah blah blah blah
// 				</div>
// 			</div>
// 			)
// 	}
// }

export default class Body extends Component {
	render() {
		return(
			<div id="project-container">
				<div className="project-header">
					<p>PROJECTS</p>
				</div>
				{this.props.projects.map(project => {
					const divBackground = {
						background: project.backgroundColor
					}
					return(
						<div className="each-project" style={divBackground}>
							<div className="project-info">
								<div className="each-title">{project.name}</div>
								<div className="project-description">{project.description}</div>
								<a className="live" href={project.url}>{project.name}</a>
								<a className="source" href={project.source}>Source Code</a>
								<img className="picture" src={project.imgSrc} alt=""/>
							</div>
						</div>
						)
				})}
			</div>
		)
	}
}