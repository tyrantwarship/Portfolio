import React,{Component} from 'react';

export default class LandingPage extends Component {
  render() {
    return(
      <header className="">
        <div className="landing-page-curtain img-responsive"></div>
        <h1>Fanaticus <small>Full Stack Web Developer</small></h1>
        <div className="landing-page-buttons">
          <a href="#" className="button-contact-me">Contact Me</a>
          <a href="#" className="button-portfolio">Portfolio</a>
        </div>
      </header>
    );
  }
}
