import React from 'react';

import itemsData from '../../../helpers/data/itemsData';
import authData from '../../../helpers/data/authData';
import Stuff from '../../shared/Stuff/Stuff';

class MyStuff extends React.Component {
  state = {
    items: [],
  }

  componentDidMount() {
    this.getItemsData();
  }

  getItemsData = () => {
    const uid = authData.getUid();
    itemsData.getItemsByUid(uid)
      .then((items) => {
        this.setState({ items });
      })
      .catch((errFromItemsData) => console.error(errFromItemsData));
  }

  deleteItem = (itemId) => {
    itemsData.deleteItem(itemId)
      .then(() => {
        this.getItemsData();
      })
      .catch((errFromDeleteItem) => console.error(errFromDeleteItem));
  }

  render() {
    const { items } = this.state;
    return (
      <div className="MyStuff container">
        <h1>My Stuff</h1>
        <div className="stuff d-flex flex-wrap row">
          {items.map((item) => <Stuff key={item.id} item={item} deleteItem={this.deleteItem} />)}
        </div>
      </div>
    );
  }
}

export default MyStuff;
