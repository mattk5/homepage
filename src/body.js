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
				{this.props.projects.map(project => {
					return(
						<div className="each-project">
							<div>{project.name}</div>
							<div>{project.description}</div>
							<a href={project.source}>Source Code</a>
							<a href={project.url}>{project.name}</a>
						</div>
						)
				})}
			</div>
		)
	}
}