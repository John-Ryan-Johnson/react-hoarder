import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getItemsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/items.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const allItemsObj = result.data;
      const items = [];
      if (allItemsObj !== null) {
        Object.keys(allItemsObj).forEach((itemId) => {
          const newItem = allItemsObj[itemId];
          newItem.id = itemId;
          items.push(newItem);
        });
      }
      resolve(items);
    })
    .catch((error) => reject(error));
});

const getSingleItem = (itemId) => axios.get(`${baseUrl}/items/${itemId}.json`);

const deleteItem = (itemId) => axios.delete(`${baseUrl}/items/${itemId}.json`);

const saveItem = (itemInfo) => axios.post(`${baseUrl}/items.json`, itemInfo);

const updateItem = (itemId, newItemObj) => axios.put(`${baseUrl}/items/${itemId}.json`, newItemObj);

export default {
  getItemsByUid,
  getSingleItem,
  deleteItem,
  saveItem,
  updateItem,
};
