import * as mongoose from 'mongoose';

export const InquerySchema = new mongoose.Schema({
  order_id: String,
  id: String,
});