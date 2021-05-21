import * as mongoose from 'mongoose';

export const FaqSchema = new mongoose.Schema({
  title: String,
  description: String,
});
