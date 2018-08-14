//________MODULES________
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import studentReducer from './Reducers/studentReducer';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';

//________COMPONENTS________
import MenuBar from './components/MenuBar';
import LandingPage from './components/LandingPage';
import ClassList from './components/ClassList';
import CreateUser from './components/CreateUser'

//________REDUX STORE________
const store = createStore(
  studentReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

//________MAIN VIEW________
function SplitPane(props) {
    return (
        <div className="SplitPane" style={{ height: '100%'}}>
            <div className="SplitPane-left">{props.left}</div>
            <div className="SplitPane-right">{props.right}</div>
        </div>
    );
  }
  function LeftContent(props) {
    return (
        <div className="LeftContent" style={{ height: '100%'}}>
            <MenuBar />
        </div>
    );
  }
  
  function RightContent(props) {
  
    return (
        <div className="RightContent" style={{ height: '100%' }}>
            <LandingPage />
        </div>
    );
  }
  
  
  const NoteHome = (props) => {
    return (
    <div style={{ height: '100%' }}>
     <SplitPane left={<LeftContent />}  right={<RightContent />} />
     </div>
     )
  }
  
  const RouTING = () => {
    // if (this.props.history.push('/'))
    return (
  
        <div style={{ height: '100%' }}>
            <Route path="/" exact component={withRouter(NoteHome)} />
            <Route path="/class/" exact component={withRouter(ClassList)} />
            <Route path="/register" exact component={withRouter(CreateUser)} />
            {/* <Route path="/usercreate" exact component={withRouter(CreateUser)} />
            <Route path="/login" exact component={withRouter(Login)} />
            <Route path="/fetch" exact component={withRouter(Fetch)} />
            <Route path="/create" exact component={withRouter(CreateNote)} />
            <Route path="/update" exact component={withRouter(UpdateNote)} />
            <Route path="/userupdate" exact component={withRouter(UpdateUser)} />
            <Route path="/notes" exact component={withRouter(NoteHome)} />
            <Route exact path="/notes/new" component={withRouter(New)} />
            <Route exact path="/notes/view/:id" component={withRouter(View)} />
            <Route exact path="/notes/edit/:idE" component={withRouter(Edit)} />
            <Route exact path="/notes/view/delete/:idE" component={withRouter(Delete)} /> */}
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
