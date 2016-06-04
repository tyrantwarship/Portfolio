import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import App from './components/App.js';


$(document).scroll(function () {
  if ($(window).scrollTop() === 0) {
    $('nav').removeClass('navbar-background-color');
  } else {
    $('nav').addClass('navbar-background-color');
    console.log($(window).scrollTop());
  }

  var page_location = $(window).scrollTop();

  function navHelper (nav_li) {
    var navs = ['aboutme', 'skillset', 'previouswork', 'contactme'];
  }

  if (page_location >= 690 && page_location <= 1530)
    // add the class to about me and remove it else where
    console.log('you are in about me')
  else if (page_location >= 1530 && page_location <= 2270)
    console.log('you are in skillset')
  else if (page_location >= 2270 && page_location <= 2465)
    console.log('you are in previous work')
  else if (page_location > 2465)
    console.log('you are in contact me')
});

ReactDOM.render(<App />, document.getElementById('root'));
