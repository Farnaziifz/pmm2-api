import * as mongoose from 'mongoose';

export const PaymentSchema = new mongoose.Schema({
  order_id: String,
  callback: String,
  amount: Number,
  desc:  String
});
