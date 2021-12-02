import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
  status: String,
  track_id: String,
  id: String,
  order_id: String,
  amount: String,
  card_no: String,
  hashed_card_no: String,
  date: String,
});
