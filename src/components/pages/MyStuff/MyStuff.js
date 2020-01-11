import React from 'react';
import { Link } from 'react-router-dom';
import './MyStuff.scss';

class MyStuff extends React.Component {
  render() {
    const itemId = '12345';
    return (
      <div className="MyStuff">
        <h1>My Stuff</h1>
        <Link className="btn btn-primary text-center mt-4" to={`/stuff/${itemId}/edit`}>Edit</Link>
        <Link className="btn btn-secondary text-center ml-3 mt-4" to={`/stuff/${itemId}`}>Single</Link>
      </div>
    );
  }
}

export default MyStuff;
