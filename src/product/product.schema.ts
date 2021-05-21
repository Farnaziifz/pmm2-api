import * as mongoose from 'mongoose';

export const ProductsSchema = new mongoose.Schema({
  name: String,
  image: String,
  category_name: String,
  category_id: String,
  brand_id: String,
  brand_name: String,
  rate: Number,
  mount: String,
  type: String,
  price: Number,
  hasDiscount: Boolean,
  discount: Number,
  details: Array,
  description: String,
  subtext: String,
});
