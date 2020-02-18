import React from "react";
import Register from "./registerForm";
import Joi from "joi-browser";
import Form from "./common/form";

import "./styles.css";

class App extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  // set the schema
  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
      .min(8)
      .max(40)
  };

  doSubmit = () => {
    console.log("submitte");
  };

  render() {
    return (
      <>
        <div className="App">
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("username", "Username")}
            {this.renderInput("password", "Password", "password")}
            {this.renderButton("Login")}
          </form>
          <Register />
        </div>
      </>
    );
  }
}
export default App;
