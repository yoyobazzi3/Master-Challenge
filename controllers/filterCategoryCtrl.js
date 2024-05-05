// import dbConnection from '../config/database';
// const itemSchema = require('../schema/itemSchema');
// const ItemModel = dbConnection.model('item', itemSchema);


// export default {
// /**
//    * Filters items by category
//    * @param  req
//    * @param  res
//    */

// filterByCategory:(req, res)=>{
//     ItemModel.find({category: req.params.category}).then(result =>{
//         if(!result.length){
//             res.status(400).json({message: 'No items were found'})
//         }
//         else{
//             res.status(200).json({result})
//         }
//     })
//     .catch(error => {
//         res.status(500).json({error: err});
//     })
// }


// }