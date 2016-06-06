import React from 'react';
import * as ContactMe from './contactme-svgs';

//var contactmethods = [1,2,3,4,5,];
const contactmethods = [
  {component: <ContactMe.gmail/>, title: 'gmail', link: 'mailto:tyrantwarzhip@gmail.com'},
  {component: <ContactMe.codepen/>, title: 'codepen', link: 'http://codepen.io/tyrantwarship'},
  {component: <ContactMe.githubBlack />, title: 'github', link: 'http://github.com/tyrantwarship'},
  {component: <ContactMe.linkedIn/>, title: 'linked-in', link: 'https://www.linkedin.com/in/felipe-romo-790092b7'}
];

export default () => {
  return (
    <div className="row contactme-area text-center" id="contactme">
      <h1>Contact Me</h1>
      <h2>Got an Idea? Lets make it happen!</h2>
      <ul className="list-inline badges-list">
        {
          contactmethods.map((value, index) =>
            <li className="col-xs-3 contactme-badge" key={index}>
              <a target="_blank" href={value.link}>
                {value.component}
                <p className="contactme-title">{value.title}</p>
              </a>
            </li>)
        }
      </ul>
    </div>
  );
}
