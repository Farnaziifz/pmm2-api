import * as mongoose from 'mongoose';

export const ProductsSchema = new mongoose.Schema({
  name: String,
  ename: String,
  image: String,
  image_1: String,
  image_2: String,
  category_name: String,
  category_id: String,
  brand_id: String,
  brand_name: String,
  uniqueId: Number,
  mount: String,
  type: String,
  price: Number,
  hasDiscount: Boolean,
  discount: Number,
  details: Array,
  description: String,
  subtext: String,
  hasExist: Boolean,
});
