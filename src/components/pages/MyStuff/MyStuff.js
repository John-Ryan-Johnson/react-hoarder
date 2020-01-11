import React from 'react';
import { Link } from 'react-router-dom';

class MyStuff extends React.Component {
  render() {
    const itemId = '12345';
    return (
      <div className="MyStuff">
        <h1>My Stuff</h1>
        <Link className="btn btn-primary" to={`/stuff/${itemId}/edit`}>Edit</Link>
        <Link className="btn btn-secondary" to={`/stuff/${itemId}`}>Single</Link>
      </div>
    );
  }
}

export default MyStuff;
