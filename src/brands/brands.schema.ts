import * as mongoose from 'mongoose';

export const BrandsSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  synopsis: String,
  qoute: String,
  madeBy: String,
  score: String,
});
