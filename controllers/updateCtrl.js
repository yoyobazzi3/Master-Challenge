import dbConnection from '../config/database';
const productSchema = require('../schema/productSchema');
const ProductModel = dbConnection.model('product', productSchema);

export default {
  updateProduct: (req, res) => {
    const productId = req.params.id;  // Extracting ID from URL parameters
    const updateData = req.body;      // Data to update

    // The { new: true } option ensures that the method returns the updated document.
    ProductModel.findByIdAndUpdate(productId, updateData, { new: true })
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
};
