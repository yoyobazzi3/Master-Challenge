import dbConnection from '../config/database';
const itemSchema = require('../schema/itemSchema');
const ItemModel = dbConnection.model('item', itemSchema);

export default {

  /**
   * Updates data by item ID.
   * @param  req
   * @param  res
   */
  updateById: (req, res) => {
    // gets the item using the object Id and requests the body to update it.
    ItemModel.findByIdAndUpdate(req.params.id, req.body, {new :true})
    .then(result => {
      if(!result){
        res.status(200).json({message: 'Item not found'})
      }
      else{
        res.status(200).json({message: 'Item updated successfully', result});
      }
    }).catch(err=> {    
        res.status(500).json({error: err});
    }) 
}
}
