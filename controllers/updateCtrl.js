import dbConnection from '../config/database';
const itemSchema = require('../schema/itemSchema');
const ItemModel = dbConnection.model('item', itemSchema);
export default{
      /**
   * Updates data by item ID.
   * @param  req
   * @param  res
   */
  updateById: (req, res) => {
    ItemModel.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(updatedItem => {
      if (!updatedItem) {
        res.status(404).json({ message: 'Item not found!' });
      } else {
        res.status(200).json({ message: 'Item updated successfully!', updatedItem });
      }
    }).catch(err => {
      res.status(500).json({ error: err });
    });
  }
}