import * as mongoose from 'mongoose';

export const ProductCategorySchema = new mongoose.Schema({
  title: String,
  image: String,
});
