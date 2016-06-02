import React from 'react';
import * as ContactMe from './contactme-svgs';

//var contactmethods = [1,2,3,4,5,];
const contactmethods = [
  <ContactMe.gmail />,
  <ContactMe.linkedIn />,
  <ContactMe.codepen />,
  <ContactMe.github />
];

export default () => {
    return (
      <div className="row contactme-area text-center" id="contactme">
        <h1>Contact Me</h1>
        <h2>Got an Idea? Lets make it happen!</h2>
        <ul className="list-inline col-sm-offset-2 badges-list">
          {
            contactmethods.map((value, index) =>
            <li className="col-xs-3 contactme-badge"
                key={index}>
                {value}
            </li>)
          }
        </ul>
      </div>
    );
}
