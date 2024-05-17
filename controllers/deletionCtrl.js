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
        //Gets the item by the object Id and deletes it.
        ItemModel.findByIdAndDelete(req.params.id)
        //passes in the result parameter
        .then(result => {
            //checks there is no result
            if(!result){
                res.status(200).json({message: 'Item not found'})
            }
            // if the result is found
            else{
                res.status(200).json({message: 'Item deleted successfully', result})
            }
        })
        .catch(err =>{
            res.status(500).json({error: err})
        }) 
    }
}
