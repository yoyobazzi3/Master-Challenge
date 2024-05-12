import dbConnection from "../config/database";
const itemsSchema = require('../schema/itemSchema');
const ItemModel = dbConnection.model('item', itemsSchema);

export default {
  /**
   * Filters items that have more than one image
   * @param  req
   * @param  res
   */
  filterByImage: (req, res) => {
    // images.1 goes to the second image in the array
    //$exists true is a boolean value to see if it exists
    ItemModel.find({"images.1": { $exists: true }})
      .then(results => {
          if (results.length) {
              res.status(200).json(results); 
          } else {
              res.status(200).json({ message: 'No items found with more than one image' });
          }
      })
      .catch((err) => {
          res.status(500).json({ error: err.message });
      });
  },
};
