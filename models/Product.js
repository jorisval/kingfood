const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number },
  discountedPrice: { type: Number },
  category: { type: String },
  images: [{ type: String }],
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  options: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Option' }],
  stock: { type: Number, default: 0 }
});

productSchema.index({name: 'text', description: 'text'});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
