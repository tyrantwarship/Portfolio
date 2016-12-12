import React from 'react';

export default () => {
    return (
      <nav className="navbar navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-menu" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbar-collapse-menu">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#aboutme">About Me</a></li>
            <li><a href="#skillset">Skill Set</a></li>
            <li><a href="#previouswork">Previous Work</a></li>
            <li><a href="#contactme">Contact Me</a></li>
          </ul>
        </div>
      </div>
      </nav>
    );
}
