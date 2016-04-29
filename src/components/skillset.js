import React from 'react';

const skillset = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
/* const skillset = [[1,2,3],[4,5,6],[7,8,9]]; */
/* const formated_skillset = skillset.map((row_of_badges, row_index) => {
   return (
   <div key={row_index} className="skillset-badges-row">
   {
   row_of_badges.map((badge) => {
   return <li key={badge} className="skillset-badge"><img src="http://placehold.it/100x100" className="img-circle" /></li>;
   })
   }
   </div>
   );
   }); */

const formated_skillset = skillset.map((badge) => {
  return (
    <li key={badge} className="col-xs-6 col-sm-4 col-md-3 skillset-badge">
      <img src="http://placehold.it/110x110" className="img-circle" />
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
