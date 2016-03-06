import React from 'react';
import ReactDOM from 'react-dom';
var $ = require("jquery");
import App from './App';


$(document).scroll(function () {
  if ($(window).scrollTop() === 0) {
    $("nav").removeClass("navbar-background-color");
  } else {
    $("nav").addClass("navbar-background-color");
  }
})

ReactDOM.render(<App />, document.getElementById('root'));
