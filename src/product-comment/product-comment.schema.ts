import * as mongoose from 'mongoose';

export const ProductCommentSchema = new mongoose.Schema({
  name: String,
  phone: String,
  subject: String,
  comment: String,
  product_id: String,
  status: Boolean,
});
