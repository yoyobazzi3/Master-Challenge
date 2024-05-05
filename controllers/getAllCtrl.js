import dbConnection from '../config/database';
const itemSchema = require('../schema/itemSchema');
const ItemModel = dbConnection.model('item', itemSchema);

export default {
  /**
   * Gets all items from the database.
   * @param req
   * @param res
   */
  getAllItems: (req, res) => {
    ItemModel.find({}).then(items => {
      if (!items.length) {
        res.status(200).json({ message: 'No items found!' });
      } else {
        res.status(200).json({ items });
      }
    }).catch(err => {
      res.status(500).json({ error: err });
    });
  }
}
