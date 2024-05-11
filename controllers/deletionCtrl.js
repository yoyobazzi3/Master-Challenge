import dbConnection from '../config/database';
const itemSchema = require('../schema/itemSchema');
const ItemModel = dbConnection.model('item', itemSchema);


export default {
/**
   * Handles the deletion of existing data.
   * @param  req
   * @param  res
   */
    deleteById:(req,res) =>{
        ItemModel.findByIdAndDelete(req.params.id)
        .then(result => {
            if(!result){
                res.status(200).json({message: 'Item not found'})
            }
            else{
                res.status(200).json({message: 'Item deleted successfully'})
            }
        })
        .catch(err =>{
            res.status(500).json({error: err})
        }) 
    }
}
