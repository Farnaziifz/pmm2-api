import * as mongoose from 'mongoose';

export const ServicesSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
});
