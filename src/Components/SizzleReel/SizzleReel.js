import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class SizzleReel extends Component {
	render() {
		return(

			<div className="videoPlayer">
				<h3>Seizure Sizzle Reel</h3>
				<iframe title="Seizure Sizzle Reel" src="https://drive.google.com/file/d/0B2jvwOAtHOnKSkZPMUhlTFhaMzQ/preview" width="640" height="480"></iframe>
			</div>
		)

	}
} // close class SizzleReel extends

export default SizzleReel;