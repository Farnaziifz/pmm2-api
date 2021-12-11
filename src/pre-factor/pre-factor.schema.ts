import * as mongoose from 'mongoose';

export const PreFactorSchema = new mongoose.Schema({
  user_id: String,
  order_id: String,
  code: String,
  product: Array,
  user_name: String,
});
