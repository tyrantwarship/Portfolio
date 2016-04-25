import React,{Component} from 'react';

// old landing page 
/* var LandingPage = React.createClass({
   render() {
   return (
   <header className="">
   <div className="landing-page-curtain img-responsive"></div>
   <QuickContact />
   </header>
   );
   }
   }); */
/* var QuickContact = React.createClass({
   render() {
   return (
   <div className="quick-contact-container">
   <div className="quick-contact-box">
   <Header />
   <QuickContactForm />
   </div>
   </div>
   );
   }
   }); */
/* var Header = React.createClass({
   render() {
   return (
   <div className="header-title">
   <h1>Web and Mobile Developer</h1>
   <h3>Reach Me</h3>
   </div>
   );
   }
   }); */

export default class LandingPage extends Component {
  render() {
    return(
      <div className="landing-page-curtain img-responsive"></div>
    );
  }
}
