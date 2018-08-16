import React from "react";
import { connect } from "react-redux";

import { createUserAction } from "../actions";

class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      password2: ""
    };
  }

  handleInput = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    this.props.createUserAction(this.state);
    this.setState({ password: "", password2: "" });
  };

  render() {
    return (
      <div className="rgstr__container">
        <h2 className="rgstr__header">ReGiStEr</h2>
        {/* USERNAME */}
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={this.state.username}
          onChange={this.handleInput}
          className="rgstr__input"
        />

        {/* PASSWORD */}
        <input
          type="text"
          placeholder="Password"
          name="password"
          value={this.state.password}
          onChange={this.handleInput}
          className="rgstr__input"
        />

        {/* PASSWORD CONFIRMATION */}
        <input
          type="text"
          placeholder="Confirm Password"
          name="password2"
          value={this.state.password2}
          onChange={this.handleInput}
          className="rgstr__input"
        />

        {/* BUTTON */}
        <button onClick={this.handleSubmit} className="rgstr__btn">
          Sign Up
        </button>

        {/* SIGN IN */}
        <a href="/login" className="rgstr__login">
          Already have an account? Sign in
        </a>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { createUserAction }
)(CreateUser);
