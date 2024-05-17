import dbConnection from '../config/database';
const itemSchema = require('../schema/itemSchema');
const ItemModel = dbConnection.model('item', itemSchema);

export default {
  /**
   * Searches for data by item _id.
   * @param  req
   * @param  res
   */
  searchById: (req, res) => {
    //switched from id to object id 
    // ItemModel.find({ id: req.params.searchQuery })
    ItemModel.findById(req.params.id).then(result => { 
      if (!result) {
        res.status(200).json({ message: 'No results found!' });
      } else {
        res.status(200).json({ result });
      }
    }).catch(err => {
      res.status(500).json({ error: err });
    });
  }
}
