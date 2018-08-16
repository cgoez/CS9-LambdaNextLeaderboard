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
    //   if (this.state.sent === false) {
    //     return (
    //       <div>
    //         <h1>Welcome to the Login Component</h1>
    //         <input
    //           type="text"
    //           placeholder="Enter Username"
    //           name="username"
    //           value={this.state.username}
    //           onChange={this.handleInput}
    //         />
    //         <input
    //           type="password"
    //           value={this.state.password}
    //           name="password"
    //           placeholder="Enter password"
    //           onChange={this.handleInput}
    //         />
    //         <div>
    //           <button onClick={this.handleSubmit}>Login </button>
    //         </div>
    //       </div>
    //     );
    //   }

    //   if (
    //     (this.state.sent === true && this.props.user.length === 0) ||
    //     (this.state.sent === true && this.props.user.length !== 0)
    //   ) {
    //     return (
    //       <div>
    //         <h1>Welcome to the Login Component</h1>
    //         {this.props.user.length === 0 ? (
    //           <h3>Credentials are invalid</h3>
    //         ) : (
    //           <h1>Valid Credentials</h1>
    //         )}
    //         <input
    //           type="text"
    //           placeholder="Enter Username"
    //           name="username"
    //           value={this.state.username}
    //           onChange={this.handleInput}
    //         />
    //         <input
    //           type="password"
    //           value={this.state.password}
    //           name="password"
    //           placeholder="Enter password"
    //           onChange={this.handleInput}
    //         />
    //         <div>
    //           <button onClick={this.handleSubmit}>Login</button>
    //         </div>
    //       </div>
    //     );
    //   }
    return (
      <div className="login__container">
        <h1>Welcome to the Login Component</h1>
        <div className="login__fields">
          <div className="login__input">
            {this.props.error.username ? (
              <div>{this.props.error.username}</div>
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
              <div>{this.props.error.password}</div>
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
        <div>
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
