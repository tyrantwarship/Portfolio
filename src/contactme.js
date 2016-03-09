import React from "react";

var contactmethods = [1,2,3,4,5,];

var ContactMe = React.createClass({
  render() {
    return (
      <div className="row contactme-area text-center">
        <h1>Contact Me</h1>
        <h2>Got an Idea? Lets make it happen!</h2>
        <ul className="list-inline col-sm-offset-2 badges-list">
          {
            contactmethods.map((value, index) => <li className="col-sm-2" key={index}><img src="http://placehold.it/100x100" className="img-circle"/></li>)
          }
        </ul>
      </div>
    );
  }
});

module.exports = ContactMe;
