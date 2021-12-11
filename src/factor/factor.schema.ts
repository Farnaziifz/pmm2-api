import * as mongoose from 'mongoose';

export const FactorSchema = new mongoose.Schema({
  track_id: String,
  transaction_id: String,
  order_id: String,
  amount: String,
  date: String,
  user_id: String,
  status: Boolean,
  product: Array,
  user_name: String,
  user_address: String,
});
