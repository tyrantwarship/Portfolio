import React,{Component} from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-area row">
        <p className="pull-left text-muted">Felipe Romo</p>
        <ul className="list-inline pull-right text-muted">
          <li><a href="#aboutme" className="text-muted">About Me</a></li>
          <li><a href="#skillset" className="text-muted">Skill Set</a></li>
          <li><a href="#previouswork" className="text-muted">Previous Work</a></li>
          <li><a href="#contactme" className="text-muted">Contact Me</a></li>
        </ul>
      </div>
    );
  }
}
