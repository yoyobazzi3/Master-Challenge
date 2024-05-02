import dbConnection from '../config/database';
const itemSchema = require('../schema/itemSchema');
const ItemModel = dbConnection.model('item', itemSchema);


export default {
/**
   * Handles the deletion of existing data.
   * @param  req
   * @param  res
   */

    deleteValue: (req, res) => {
        const itemId = req.params.id;  

        ItemModel.findByIdAndDelete(itemId)
            .then(result => {
                if (result) {
                    res.status(200).json({ message: 'Item deleted successfully!', result });
                } else {
                    res.status(404).json({ message: 'Item not found!' });
                }
            })
            .catch(err => {
                res.status(500).json({ error: err });
            });
    }
}
