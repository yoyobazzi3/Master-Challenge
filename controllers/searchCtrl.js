import dbConnection from '../config/database';
const itemSchema = require('../schema/itemSchema');
const ItemModel = dbConnection.model('item', itemSchema);

export default {
  /**
   * Searches for an item by ID.
   * @param  req
   * @param  res
   */
  searchById: (req, res) => {
    const itemId = req.params.id;  // Extracting ID from URL parameters

    ItemModel.findById(itemId)  // Correct method to find by ID
    .then(result => {
      if (!result) {  // Check if result is null, not if the length is zero
        res.status(404).json({ message: 'No results found!' });  // Use 404 when resource is not found
      } else {
        res.status(200).json({ result });
      }
    })
    .catch(err => {
      res.status(500).json({ error: err });  // Handling errors
    });
  }
};
