import React, { Component } from 'react';
import Footer from './footer';


import './about.css'

export default class About extends Component {
	render() {
		return (
			<div>
				<div className="about">
					<p className="about-title"><a name="about" id="about-land">About</a></p>
					<p className="about-body">Aloha! After discovering my passion for programming I moved to New York, leaving my life in Hawaii to pursue a career in Web Development. I completed an 18-week immersive program at Dev Bootcamp where I've learned and created programs using Ruby, Javascript & Ruby on Rails. <br/> Risking it all by leaving Retail Management in Hawaii to pursue Computer Programming in New York has been an enriching and rewarding experience. As a Web Developer, I enjoy working with the Back-End but also dabble with the Front-End as well. </p>
				</div>
				<Footer />
			</div>
			)
	}
}