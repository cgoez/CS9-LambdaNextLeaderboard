//________MODULES________
import { connect } from "react-redux";
import { CREATE_USER, LOGIN_ACTION, UPDATE_USER, ERRORS } from "./actions";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// TODO import axios from 'axios';

//________REACT COMPONENTS________
import MENUBAR from "./components/MenuBar";
import CLASSLIST from "./components/ClassList";
import LANDINGPAGE from "./components/LandingPage";
import CREATEUSER from "./components/CreateUser";
import LOGIN from "./components/Login";

//________STYLING________
import "./App.css";
import CreateEdit from "./components/CreateOrEditClass/CreateEditClass";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleLogOut = () => {
    localStorage.removeItem("token");
  };

  componentWillMount() {
    console.log("Going to mount");
  }

  componentWillUpdate() {
    console.log("going to update");
  }

  componentWillUnmount() {
    console.log("going to unmount");
  }

  render() {
    return (
      <Router>
        <div className="APP">
          <div className="APP__HEADER">
            <div className="APP__BREADCRUMBS">
              BREAD CRUMBS -> BREAD CRUMBS -> BREAD CRUMBS
              {/* TODO ADD BREADCRUMB COMPONENT*/}
            </div>
            <div className="APP__USERHEADER">
              {localStorage.getItem("token") ? (
                <Link onClick={this.handleLogOut} to="/">
                  Log out
                </Link>
              ) : (
                <Link to="/login">Log in</Link>
              )}
              {/* <button className="APP__SIGN-IN-OUT">
                <Link
                  onClick={this.handleLogOut}
                  to={localStorage.getItem("token") ? "/" : "/login"}
                >
                  {localStorage.getItem("token") ? "Log out" : "Log In"}
                </Link>
              </button> */}
              {/* TODO ADD LOGIN LINK COMPONENT*/}
            </div>
          </div>
          {/* TODO BREAD CRUMB BAR GOES HERE */}
          <div className="APP__CONTENT">
            {localStorage.getItem("token") ? (
              <div className="APP__MENU">
                <MENUBAR />
              </div>
            ) : null}
            <div className="APP__BODY">
              <Switch>
                <Route exact path="/" component={LANDINGPAGE} />
                <Route exact path="/login" component={LOGIN} />
                <Route exact path="/create-edit" component={CreateEdit} />
                <Route exact path="/register" component={CREATEUSER} />
                <Route exact path="/classlist" component={CLASSLIST} />
                {/* TODO ADD MORE COMPONENTS*/}
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    classes: state.classes
  };
};

export default connect(
  mapStateToProps,
  { CREATE_USER, LOGIN_ACTION, UPDATE_USER, ERRORS }
)(App);
