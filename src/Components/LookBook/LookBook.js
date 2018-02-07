import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import lookBook from "./SeizureLookBook_2017-07-26_compressed.pdf";

class LookBook extends Component {

	state = {
		numPages: null,
		pageNumber: 1,
	}

	onDocumentLoad = ({ numPages }) => {
		this.setState({ numPages });
	}

	render() {
		const { pageNumber, numPages } = this.state;

		return(
			<div>
				<Document 
					file={lookBook}
					onLoadSuccess={this.onDocumentLoad}					
				>	

				{[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(pageNumber => (
							<Page pageNumber={pageNumber} />
					))}
				</Document>

			</div>	
		);
	}
}

export default LookBook;