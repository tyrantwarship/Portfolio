// var React = require("react");
import React from "react";
import NavBar from "./navbar";
import QuickContactForm from "./quickContactForm.js";
require("bootstrap");
require("bootstrap-webpack");
require("./style.scss");


var App = React.createClass({
  render() {
    return (
      <div>
        <LandingPage />
        <Content />
      </div>
    );
  }
});

var LandingPage = React.createClass({
  render() {
    return (
      <header className="">
        <div className="landing-page-curtain img-responsive"></div>
        <NavBar />
        <QuickContact />
      </header>
    );
  }
});

var Header = React.createClass({
  render() {
    return (
      <div className="header-title">
        <h1>Web and Mobile Developer</h1>
        <h3>Reach Me</h3>
      </div>
    );
}
});

var QuickContact = React.createClass({
  render() {
    return (
      <div className="quick-contact-container">
        <div className="quick-contact-box">
          <Header />
          <QuickContactForm />
        </div>
      </div>
    );
  }
});

var Content = React.createClass({
  render() {
    return (
      <div className="content">
      </div>
    );
  }
});

module.exports = App;