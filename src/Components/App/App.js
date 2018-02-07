import React, { Component } from 'react';
import logo from './logo.svg';
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import Paper from "material-ui/Paper";
import "./App.css";

import Home from "../Home/Home";
import LookBook from "../LookBook/LookBook";
import SizzleReel from "../SizzleReel/SizzleReel";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";


const paperStyle = {
  height: "85%",
  width: "85%",
  margin: "7%",
  textAlign: "center",
  display: "inline-block",
  // backgroundImage: {backgroundImage}
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      show: null
    };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  showHome = () => {
    this.setState({ show: "home", open: false});
  }

  showLookBook = () => {
    this.setState({ show: "lookbook", open: false});
  }

  showSizzleReel = () => {
    this.setState({ show: "sizzlereel", open: false});
  }

  showContactUs = () => {
    this.setState({ show: "contactus", open: false});
  }

  render() {

    let content = null;

    switch (this.state.show) {

      case "home":
        content = <Home />
        break; 

      case "lookbook":
        content = <LookBook />;
        break;

      case "sizzlereel":
        content = <SizzleReel />
        break;

      case "contactus":
        content = <ContactUs />
        break;

      default:
        content = <Home />

    }


    return (
      <div className="App">

        <div className="logo">
        <AppBar
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            style={{position: 'fixed', top: 0}}
            title={"Seizure"}
            onLeftIconButtonClick={this.handleToggle}
          />
        </div>       

        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <AppBar title= "Seizure" />
            <MenuItem onClick={this.showHome}>Home</MenuItem>
            <MenuItem onClick={this.showLookBook}>Look Book</MenuItem>
            <MenuItem onClick={this.showSizzleReel}>Sizzle Reel</MenuItem>
            <MenuItem onClick={this.showContactUs}>Contact Us</MenuItem>
        </Drawer>

        <Paper style={paperStyle} zDepth={5}>
          {content} {/* this is main content area */}
        </Paper>  

        <Footer />      

      </div> // close div className="App"
    );
  }
}

export default App;
