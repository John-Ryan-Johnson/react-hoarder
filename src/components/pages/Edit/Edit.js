import React from 'react';

import authData from '../../../helpers/data/authData';
import itemsData from '../../../helpers/data/itemsData';

class Edit extends React.Component {
  state = {
    itemName: '',
    itemImage: '',
    itemDescription: '',
  }

  componentDidMount() {
    const { itemId } = this.props.match.params;
    if (itemId) {
      itemsData.getSingleItem(itemId)
        .then((response) => {
          this.setState({ itemName: response.data.itemName, itemImage: response.data.itemImage, itemDescription: response.data.itemDescription });
        })
        .catch((errFromEdit) => console.error(errFromEdit));
    }
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ itemName: e.target.value });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ itemImage: e.target.value });
  }

  descriptionChange = (e) => {
    e.preventDefault();
    this.setState({ itemDescription: e.target.value });
  }

  updateItemEvent = (e) => {
    e.preventDefault();
    const { itemId } = this.props.match.params;
    const editedItem = {
      itemName: this.state.itemName,
      itemDescription: this.state.itemDescription,
      itemImage: this.state.itemImage,
      uid: authData.getUid(),
    };
    itemsData.updateItem(itemId, editedItem)
      .then(() => this.props.history.push('/stuff'))
      .catch((errFromUpdateItem) => console.error(errFromUpdateItem));
  }

  render() {
    const { itemName, itemImage, itemDescription } = this.state;

    return (
        <form className="EditStuff">
          <div className="form-group">
            <label htmlFor="item-name">Item Name</label>
            <input
              input="text"
              className="form-control"
              id="item-name"
              placeholder="Enter item name"
              value={itemName}
              onChange={this.nameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="item-image">Item Image</label>
            <input
              input="text"
              className="form-control"
              id="item-image"
              placeholder="Enter item image url"
              value={itemImage}
              onChange={this.imageChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="item-description">Item Description</label>
            <input
              input="text"
              className="form-control"
              id="item-description"
              placeholder="Enter item description"
              value={itemDescription}
              onChange={this.descriptionChange}
            />
          </div>
          <button className="btn btn-info" onClick={this.updateItemEvent}>Update Item</button>
        </form>
    );
  }
}

export default Edit;
