import React from 'react';
import * as SVGS from './skillset-svgs';


const skillset = [
  <SVGS.html5 />,
  <SVGS.css3 />,
  <SVGS.javascript />,
  <SVGS.atom />,
  <SVGS.bitbucket />,
  <SVGS.bootstrap />,
  <SVGS.bower />,
  <SVGS.chrome />,
  <SVGS.d3js />,
  <SVGS.debian />,
  <SVGS.firefox />,
  <SVGS.git />,
  <SVGS.github />,
  <SVGS.grunt />,
  <SVGS.ie10 />,
  <SVGS.jquery />,
  <SVGS.less />,
  <SVGS.mongodb />,
  <SVGS.nodejs />,
  <SVGS.python />,
  <SVGS.react />,
  <SVGS.angular />,
  <SVGS.sass />,
  <SVGS.ssh />,
  <SVGS.trello />,
  <SVGS.ubuntu />,
  <SVGS.vim />,
  <SVGS.windows8 />,
];

const featured_skillset = [
  <SVGS.html5 />,
  <SVGS.css3 />,
  <SVGS.bootstrap />,
  <SVGS.less />,
  <SVGS.sass />,
  <SVGS.javascript />,
  <SVGS.jquery />,
  <SVGS.react />,
  <SVGS.d3js />,
  <SVGS.mongodb />,
  <SVGS.nodejs />,
  <SVGS.grunt />,
  <SVGS.bower />,
  <SVGS.angular />
];

// this is a test


const formated_skillset = featured_skillset.map((badge, i) => {
  return (
    <li key={i} className="col-xs-6 col-sm-4 col-md-3 skillset-badge">
      {badge}
    </li>
  );
})



export default () => {
  return (
    <div className="row skillset-area" id="skillset">
      <h1 className="text-center">Skillset <small>My ever growing list...</small></h1>
      <ul className="skillset-badges-list row text-center">
        {formated_skillset}
      </ul>
      <h5 className="skillset-tip">Note: Click any for more info</h5>
    </div>
  );
}
