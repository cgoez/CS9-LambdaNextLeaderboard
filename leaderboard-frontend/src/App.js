//________MODULES________
import { connect } from 'react-redux';
import { CREATE_USER, LOGIN_ACTION, UPDATE_USER, ERRORS } from './actions';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// TODO import axios from 'axios';


//________REACT COMPONENTS________
import MENUBAR from './components/MenuBar';
import CLASSLIST from './components/ClassList';
import LANDINGPAGE from './components/LandingPage';
import CREATEUSER from './components/CreateUser';
import LOGIN from './components/Login';

//________STYLING________
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      classes: [],
      // TODO users: [],
    }
    // TODO this.storage = window.localStorage;
  }

  render() {
    return (
      <Router>
        <div className="APP">
        
          <div className="APP__HEADER">
            <div className="APP__USERHEADER">
              SIGN IN / SIGN OUT
              {/* TODO ADD LOGIN LINK COMPONENT*/}
            </div>
            <div className="APP__BREADCRUMBS">
              BREAD CRUMBS -> BREAD CRUMBS -> BREAD CRUMBS
              {/* TODO ADD BREADCRUMB COMPONENT*/}
            </div>
            {/* TODO BREAD CRUMB BAR GOES HERE */}
          </div>

          <div className="APP__MAIN">
            <div className="APP__MENU">
              <Route path='/' component={MENUBAR} />
            </div>
            <div className="APP__BODY">
              <Switch>
                <Route exact path='/' component={LANDINGPAGE} />
                <Route path='/classlist' component={CLASSLIST} />
                <Route path='/login' component={LOGIN} />
                <Route path='/createuser' component={CREATEUSER} />'
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
    classes: state.classes,
  }
}

export default connect(mapStateToProps, { CREATE_USER, LOGIN_ACTION, UPDATE_USER, ERRORS })(App);