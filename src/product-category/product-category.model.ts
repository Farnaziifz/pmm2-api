import * as mongoose from 'mongoose';

export const ProductCategorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: String,
});

export interface ProductCategory {
  id: string;
  title: string;
  image: string;
}
