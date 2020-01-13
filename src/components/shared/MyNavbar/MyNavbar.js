import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Link } from 'react-router-dom';
import './MyNavbar.scss';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;
    const buildNavbar = () => {
      if (authed) {
        return (
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/stuff">My Stuff</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/stuff/new">New Stuff</Link>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-danger text-white" onClick={this.logMeOut}>Log Out</button>
            </li>
          </ul>
        );
      }

      return (<ul className="navbar-nav ml-auto"></ul>);
    };

    return (
      <div className="MyNavbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <nav className="navbar-brand text-white">React Hoarder</nav>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {
              buildNavbar()
            }
          </div>
        </nav>
      </div>
    );
  }
}

export default MyNavbar;
