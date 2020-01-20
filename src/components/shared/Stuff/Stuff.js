import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Stuff.scss';

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

        <div className="Stuff col-md-3">
          <Link className="card mb-3" style={{ textDecoration: 'none' }} to={`/stuff/${item.id}`}>
            <img src={item.itemImage} className="card-img-top" alt=""/>
              <div className="card-body text-dark">
               <h5 className="card-title">{item.itemName}</h5>
               <p className="card-title">{item.itemDescription}</p>
               <Link className="btn btn-outline-success mr-3" to={`/stuff/${item.id}/edit`}>Update</Link>
               <button className="btn btn-outline-danger ml-3" onClick={this.deleteItemEvent}>Delete</button>
              </div>
          </Link>
        </div>

    );
  }
}

export default Stuff;
