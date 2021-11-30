import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
  title: String,
  description: String,
});
