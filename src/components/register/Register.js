import React, { Component } from 'react';

import FormLabel from '../generals/FormLabel.js';
import FormTextField from '../generals/FormTextField.js';
import CheckBox from '../generals/FormCheckBox.js';
import Button from '../generals/Button.js';

class Register extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Register Page</h3>
        <form className="form-horizontal"  onSubmit={this.props.doAuthen}>
          <div className="form-group">
            <FormLabel htmlFor="username" value="Username"/>
            <div className="col-md-10">
                <FormTextField type="text" id="username"/>
            </div>
          </div>
          <div className="form-group">
            <FormLabel htmlFor="email" value="Email"/>
            <div className="col-md-10">
                <FormTextField type="email" id="email"/>
            </div>
          </div>
          <div className="form-group">
            <FormLabel htmlFor="password" value="Password"/>
            <div className="col-md-10">
                <FormTextField type="password" id="password"/>
            </div>
          </div>
          <div className="form-group">
            <FormLabel htmlFor="repassword" value="Confirm Password"/>
            <div className="col-md-10">
                <FormTextField type="password" id="repassword"/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-offset-2 col-md-10">
                <Button value="Register" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
