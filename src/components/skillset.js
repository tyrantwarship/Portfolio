import React from 'react';

/* const skillset = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]; */
const skillset = [[1,2,3],[4,5,6],[7,8,9]];
const formated_skillset = skillset.map((row_of_badges, row_index) => {
  return (
    <div key={row_index} className="skillset-badges-row">
      {
        row_of_badges.map((badge) => {
          return <li key={badge} className="skillset-badge"><img src="http://placehold.it/100x100" className="img-circle" /></li>;
        })
      }
    </div>
  );
});



export default () => {
    return (
      <div className="row skillset-area" id="skillset">
        <h1 className="text-center">Skillset <small>My ever growing list...</small></h1>
        {/* <h2 className="text-center">My ever growing list...</h2> */}
        <ul className="skillset-badges-list">
          {/* {
          skillset.map((value, index) => <li className="col-sm-2" key={index}><img src="http://placehold.it/100x100" className="img-circle"/></li>)
          } */}
          {formated_skillset}
        </ul>
        <h5 className="skillset-tip">Note: Click any for more info</h5>
      </div>
    );
}
