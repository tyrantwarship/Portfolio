import React from 'react';
import NavBar from './navbar';
import LandingPage from './landing-page2';
import Content from './content';
require('bootstrap');
require('bootstrap-webpack');
require('../../styles/style.scss');



export default (props) => {
  return (
    <div>
      <NavBar />
      <LandingPage />
      <Content />
    </div>
  );
}
