import React from "react";

var QuickContactForm = React.createClass({
  render() {
    return (
      <form className="form-horizontal quick-contact-form">
        <div className="form-group">
          <label for="inputName" className="col-sm-offset-1 col-sm-2 control-label">Name</label>
          <div className="col-sm-7">
            <input type="text" className="form-control" id="inputName" placeholder="John Doe" />
          </div>
        </div>
        <div className="form-group">
          <label for="inputEmail" className="col-sm-offset-1 col-sm-2 control-label">E-Mail</label>
          <div className="col-sm-7">
            <input type="email" className="form-control" id="inputEmail" placeholder="Which Email Can I get back to you at?" />
          </div>
        </div>
        <div className="form-group">
          <label for="inputPurpose" className="col-sm-offset-1 col-sm-2 control-label">Purpose</label>
          <div className="col-sm-7">
            {/* <input type="text" className="form-control" id="inputPurpose" placeholder="Is there a project you have in mind?" /> */}
            <textarea className="form-control" id="inputPurpose" name="message" rows="5" cols="45">
              Is there a project you have in mind?
            </textarea>
          </div>
        </div>
      </form>
    );
  }
});

module.exports = QuickContactForm;
