import React from 'react';

export default () => {
    return(
      <header>
        <div className="landing-page-curtain img-responsive"></div>
        <div className="landing-page-content">
          <h1>Fanaticus <small>Full Stack Web Developer</small></h1>
          <div className="landing-page-buttons">
            <a href="#contactme" className="button-contact-me">Contact Me</a>
            <a href="#previouswork" className="button-portfolio">Portfolio</a>
          </div>
        </div>
      </header>
    );
}
