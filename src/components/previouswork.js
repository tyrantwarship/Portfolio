import React from 'react';

const previouswork = [1,2,3,1,2,3];
const formated_previouswork = previouswork.map((value, index) => <li className="col-xs-12 col-sm-6 col-md-4" key={index}><img src="http://placehold.it/300x200" className="img-rounded"/></li>);

export default () => {
    return (
      <div className="row previouswork-area text-center" id="previouswork">
        <h1>Previous Work
          <small>See some of the projects I've worked on</small>
        </h1>
        <ul className="list-inline previouswork-list">
          {
            formated_previouswork
          }
        </ul>
          <h5 className="previouswork-tip">Note: Click any for more details</h5>
      </div>
    );
}
