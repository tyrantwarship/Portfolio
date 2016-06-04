import React from 'react';

const previouswork = [1,2,3,1,2,3];
const formated_previouswork = previouswork.map((value, index) => <li className="col-xs-12 col-sm-6 col-md-4" key={index}><img src="http://placehold.it/300x200" className="img-rounded"/></li>);

const Carousel = () => {
  return (
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="3"></li>
      </ol>

      <div className="carousel-inner" role="listbox">
        <div className="item active">
          <img alt="simon-project" src="https://raw.githubusercontent.com/tyrantwarship/FCC-SimonSays-Zipline/master/demo-first.png"/>
        </div>
        <div className="item">
          <img alt="Chania" src="https://raw.githubusercontent.com/tyrantwarship/FCC-WikiSearch-Zipline/master/demo-first.png"/>
        </div>
        <div className="item">
          <img alt="Chania" src="https://raw.githubusercontent.com/tyrantwarship/FCC-RecipeBox-Zipline/master/preview1.png"/>
        </div>
        <div className="item">
          <img alt="Chania" src="https://raw.githubusercontent.com/tyrantwarship/FCC-Calculator-Zipline/master/preview.png"/>
        </div>
      </div>

      <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default () => {
  return (
    <div className="row previouswork-area text-center" id="previouswork">
      <h1>Previous Work
        <small>See some of the projects I've worked on</small>
      </h1>
      <ul className="list-inline previouswork-list">
        {/* {
        formated_previouswork
        } */}
        {/* <li>
        <img src="http://placehold.it/300x200"/>
        </li> */}
      </ul>
      <Carousel />
      <h5 className="previouswork-tip">Note: Click any for more details</h5>
    </div>
  );
}
