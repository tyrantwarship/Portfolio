import React from 'react';

export default () => {
    return (
      <form className="form-horizontal quick-contact-form">
        <div className="form-group">
          <label htmlFor="inputName" className="col-sm-offset-1 col-sm-2 control-label">Name</label>
          <div className="col-sm-7">
            <input type="text" className="form-control" id="inputName" placeholder="John Doe" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputEmail" className="col-sm-offset-1 col-sm-2 control-label">E-Mail</label>
          <div className="col-sm-7">
            <input type="email" className="form-control" id="inputEmail" placeholder="Which Email Can I get back to you at?" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputPurpose" className="col-sm-offset-1 col-sm-2 control-label">Purpose</label>
          <div className="col-sm-7">
            {/* <input type="text" className="form-control" id="inputPurpose" placeholder="Is there a project you have in mind?" /> */}
      <textarea className="form-control" id="inputPurpose" name="message" rows="5" cols="45" defaultValue="Is there a project you have in mind?" />
          </div>
        </div>
      </form>
    );
}
