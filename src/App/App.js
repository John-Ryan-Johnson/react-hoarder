import React from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import './App.scss';

import firebaseConnection from '../helpers/data/connection';
import MyNavbar from '../components/shared/MyNavbar/MyNavbar';
import Home from '../components/pages/Home/Home';
import Auth from '../components/pages/Auth/Auth';
import Edit from '../components/pages/Edit/Edit';
import MyStuff from '../components/pages/MyStuff/MyStuff';
import New from '../components/pages/New/New';
import SingleStuff from '../components/pages/SingleStuff/SingleStuff';

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/home', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};
const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

firebaseConnection();

class App extends React.Component {
    state = {
      authed: false,
    }


    componentDidMount() {
      this.removeListener = firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ authed: true });
        } else {
          this.setState({ authed: false });
        }
      });
    }

    componentWillUnmount() {
      this.removeListener();
    }

    render() {
      const { authed } = this.state;
      return (
        <div className="App">
          <Router>
            <MyNavbar authed={authed}/>
            <Switch>
              <PrivateRoute path="/home" exact component={Home} authed={authed}/>
              <PublicRoute path="/auth" exact component={Auth} authed={authed}/>
              <PrivateRoute path="/stuff/12345/edit" exact component={Edit} authed={authed}/>
              <PrivateRoute path="/stuff" exact component={MyStuff} authed={authed}/>
              <PrivateRoute path="/stuff/new" exact component={New} authed={authed}/>
              <PrivateRoute path="/stuff/12345" exact component={SingleStuff} authed={authed}/>
            </Switch>
          </Router>
        </div>
      );
    }
}

export default App;
