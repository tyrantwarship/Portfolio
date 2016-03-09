import React from "react";

var previouswork = [1,2,3,1,2,3];

var PreviousWork = React.createClass({
  render() {
    return (
      <div className="row previouswork-area text-center">
        <h1>Previous Work</h1>
        <h2>See some of the projects I've worked on
          <br />
          <small>Click for more details</small>
        </h2>
        <ul className="list-inline previouswork-list">
        {
          previouswork.map((value, index) => <li className="col-sm-4" key={index}><img src="http://placehold.it/300x200" className="img-rounded"/></li>)
          }
        </ul>
      </div>
    );
  }
});

module.exports = PreviousWork;
