import React, {Component} from 'react';
import AboutMe from './aboutme';
import SkillSet from './skillset';
import PreviousWork from './previouswork';
import ContactMe from './contactme';
import Footer from './footer';

export default class Content extends Component {
  render() {
    return (
      <div className="content container">
        <AboutMe />
        <SkillSet />
        <PreviousWork />
        <ContactMe />
        <Footer />
      </div>
    );
  }
}

