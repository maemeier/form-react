import React from "react";
import Input from "./common/input";
import "./styles.css";

class App extends React.Component {
  state = {
    account: { username: "", password: "" },
    errors: {}
  };

  validate = () => {
    return { username: "username is required" };
  };
  handleSubmit = event => {
    event.preventDefault();
    const error = this.validate();
    this.setState({ error });
    if (error) return;
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;

    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <>
        <div className="App">
          <form onSubmit={this.handleSubmit}>
            <Input
              name="username"
              value={account.username}
              label="Username"
              onChange={this.handleChange}
            />

            <Input
              name="password"
              value={account.password}
              label="Password"
              onChange={this.handleChange}
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
