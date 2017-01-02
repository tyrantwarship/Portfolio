import React from 'react';
import AboutMe from './aboutme';
import SkillSet from './skillset';
import ContactMe from './contactme';
import Footer from './footer';
import Elm from 'react-elm-components';
import { PreviousWork } from './PreviousWork';

export default () => {
    return (
      <div className="content container">
        <AboutMe />
        <SkillSet />
        <Elm src={PreviousWork} />
        <ContactMe />
        <Footer />
      </div>
    );
}

