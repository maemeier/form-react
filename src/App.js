import React from "react";
import Input from "./common/input";
import "./styles.css";

class App extends React.Component {
  state = {
    account: { username: "", password: "" },
    errors: {}
  };

  validate = () => {
    const errors = {};
    const { account } = this.state;
    if (account.username.trim() === "")
      errors.username = "Username is required";
    if (account.password.trim() === "")
      errors.password = "password is required";

    return Object.keys(errors).length === 0 ? null : errors;
  };
  handleSubmit = event => {
    event.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    console.log("submitted");
  };

  // validateProperty
  validateProperty = ({ name, value }) => {
    if (name === "username") {
      if (value.trim() === "") return "username is required";
    }

    if (name === "pasword") {
      if (value.trim() === "") return "password is required";
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const account = { ...this.state.account };
    account[input.name] = input.value;

    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <>
        <div className="App">
          <form onSubmit={this.handleSubmit}>
            <Input
              name="username"
              value={account.username}
              label="Username"
              onChange={this.handleChange}
              error={errors.username}
            />

            <Input
              name="password"
              value={account.password}
              label="Password"
              onChange={this.handleChange}
              error={errors.password}
            />
            <div className="form-group form-check" />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}
export default App;
