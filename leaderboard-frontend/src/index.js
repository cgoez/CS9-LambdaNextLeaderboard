//________MODULES________
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import studentReducer from './Reducers/studentReducer';
import { BrowserRouter as Router, Route, withRouter, Link } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';

//________COMPONENTS________

import ClassList from './components/ClassList';
import CreateUser from './components/CreateUser';
import Login from './components/Login'
import HomeTemplate from './subComponents/HomeTemplate'

//________REDUX STORE________
const store = createStore(
    studentReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

//________MAIN VIEW________
export function SplitPane(props) {
    return (
        <div className="SplitPane" style={{ height: '100%' }}>
            <div className="SplitPane-left">{props.left}</div>
            <div className="SplitPane-right">{props.right}</div>
        </div>
    );
}
// I moved everything that was necessary for the HomeTemplate into ./subComponents/HomeTemplate
// It'll be much more organized that way. Also, each component has many style configurations, which
// was why I thought it was very important.
// I hope to keep everything simple that way. After all the styles have been applied, 
// the final piece will be imported here, index.js, and given a route.

const RouTING = () => {
    return (

        <div style={{ height: '100%' }}>
            <Route path="/" exact component={withRouter(HomeTemplate)} />
            <Route path="/class/" exact component={withRouter(ClassList)} />
            <Route path="/register" exact component={withRouter(CreateUser)} />
            <Route path="/login" exact component={withRouter(Login)} />
        </div>)
}



ReactDOM.render(
    <Provider store={store}>
        <Router>
            <RouTING />
        </Router>
    </ Provider>
    , document.getElementById('root'));
registerServiceWorker();
