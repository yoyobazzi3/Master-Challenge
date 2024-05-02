import dbConnection from '../config/database';
const productSchema = require('../schema/productSchema');
const ProductModel = dbConnection.model('product', productSchema);




export default {
  /**
   * Updates an existing product.
   * @param  req - The HTTP request object.
   * @param  res - The HTTP response object.
   */
  updateProduct: (req, res) => {
    const productId = req.params.id;  
    const updateData = req.body;    

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ message: 'No update data provided' });
    }

    ProductModel.findByIdAndUpdate(productId, updateData, { returnDocument: 'after', runValidators: true })
      .then(result => {
        if (result) {
          res.status(200).json({ message: 'Product updated successfully!', result });
        } else {
          res.status(404).json({ message: 'Product not found!' });
        }
      })
      .catch(err => {
        res.status(500).json({ error: err });
      });
  }
}