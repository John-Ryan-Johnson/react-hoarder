import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        <Link className="btn btn-primary text-center text-white mt-4" to="/stuff/new">New</Link>
        <Link className="btn btn-secondary text-center text-white ml-3 mt-4" to="/stuff">My Stuff</Link>
      </div>
    );
  }
}

export default Home;
