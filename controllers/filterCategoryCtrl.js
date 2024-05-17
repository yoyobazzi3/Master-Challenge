import dbConnection from '../config/database';
const itemSchema = require('../schema/itemSchema');
const ItemModel = dbConnection.model('item', itemSchema);


export default {
/**
   * Filters items by category
   * @param  req
   * @param  res
   */

filterByCategory:(req, res)=>{
    //Gets the items of a specific category
    ItemModel.find({category: req.params.category})
    // passes in the result parameter
    .then(result =>{
        // if there are no items in the db
        if(!result.length){
            res.status(200).json({message: 'No items were found'})
        }
        //if items are found of that category display them.
        else{
            res.status(200).json({result})
        }
    
})
    .catch(err=>{
        res.status(500).json({error: err})
    })

}
}