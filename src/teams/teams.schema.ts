import * as mongoose from 'mongoose';

export const TeamSchema = new mongoose.Schema({
  fullname: String,
  description: String,
  title: String,
});
