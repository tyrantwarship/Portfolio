import React from "react";

var skillset = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

var SkillSet = React.createClass({
  render() {
    return (
      <div className="row skillset-area">
        <h1 className="text-center">Skillset</h1>
        <h2 className="text-center">My ever growing list...</h2>
        <ul className="list-inline col-sm-offset-2 badges-list">
          {
            skillset.map((value, index) => <li className="col-sm-2" key={index}><img src="http://placehold.it/100x100" className="img-circle"/></li>)
          }
        </ul>
      </div>
    );
  }
});

module.exports = SkillSet;
