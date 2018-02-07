import React, { Component } from 'react';
import ContactUsPDF from './ContactUs.pdf';
import { Document, Page } from 'react-pdf';
import "./ContactUs.css";

class ContactUs extends Component {

	state = {
		numPages: null,
		pageNumber: 1,
	}

	onDocumentLoad = ({ numPages }) => {
		this.setState({ numPages });
	}

  render() {
    const { pageNumber, numPages } = this.state;
 
    return (
      <div>
        <Document
          file={ContactUsPDF}
          onLoadSuccess={this.onDocumentLoad}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    );
  }

} // close class ContactUs extends Component

export default ContactUs;