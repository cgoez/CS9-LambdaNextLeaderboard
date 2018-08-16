import React from "react";
import { connect } from "react-redux";
import { loginAction } from "../actions";

//________STYLING________
import "./Login.css";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      message: "",
      sent: false
    };
  }
  handleInput = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = () => {
    this.props.loginAction(this.state, this.props.history);
    this.setState({ sent: true });
    this.setState({ username: "", password: "" });
  };

  render() {
    return (
      <div className="login__container">
        <h1>Welcome to the Login Component</h1>
        <div className="login__form">
          <div className="login__input">
            {this.props.error.username ? (
              <div className="login__error">{this.props.error.username}</div>
            ) : null}
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              value={this.state.username}
              onChange={this.handleInput}
            />
          </div>
          <div className="login__input">
            {this.props.error.password ? (
              <div className="login__error">{this.props.error.password}</div>
            ) : null}
            <input
              type="password"
              value={this.state.password}
              name="password"
              placeholder="Enter password"
              onChange={this.handleInput}
            />
          </div>
        </div>
        <div className="login__btn">
          <button onClick={this.handleSubmit} className="login__button">
            Login
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user,
    error: state.error
  };
};
export default connect(
  mapStateToProps,
  { loginAction }
)(Login);
