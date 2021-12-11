import * as mongoose from 'mongoose';

export const DiscountSchema = new mongoose.Schema({
  amount: String,
  text: String,
  owner: String,
  code: String,
});
