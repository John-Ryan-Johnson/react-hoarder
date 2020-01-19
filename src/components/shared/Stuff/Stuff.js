import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import itemShape from '../../../helpers/propz/itemShape';

class Stuff extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
    deleteItem: PropTypes.func,
  }

  deleteItemEvent = (e) => {
    e.preventDefault();
    const { deleteItem, item } = this.props;
    deleteItem(item.id);
  }

  render() {
    const { item } = this.props;

    return (
      <div className="Stuff col-md-4">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{item.itemName}</h4>
            <Link className="btn btn-secondary" to={`/stuff/${item.id}`}>View Single Item</Link>
            <Link className="btn btn-warning" to={`/stuff/${item.id}/edit`}>Edit</Link>
            <button className="btn btn-danger" onClick={this.deleteItemEvent}>Delete Item</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Stuff;
