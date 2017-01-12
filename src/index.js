import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import App from './components/App.js';


$(document).ready(function () {
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

    // smooth scroll function
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

})

ReactDOM.render(<App />, document.getElementById('root'));
