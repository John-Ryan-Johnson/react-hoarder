import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        <Link className="btn btn-primary" to="/stuff/new">New Stuff</Link>
        <Link className="btn btn-secondary" to="/stuff">My Stuff</Link>
      </div>
    );
  }
}

export default Home;
