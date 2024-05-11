import dbConnection from '../config/database';
const itemSchema = require('../schema/itemSchema');
const ItemModel = dbConnection.model('item', itemSchema);


export default {
/**
   * Filters items by category
   * @param  req
   * @param  res
   */

filterByImage:(req,res)=>{
    ItemModel.find({image : req.params.image}).then(result =>{
        if(image.length>1){
            res.status(200).json({result})
        }
        else{
            res.status(400).json({message:'There are no items with more than one picture'})
        }
    })
    .catch(err=> {
        res.status(500).json({error: err})
    })
}

}
