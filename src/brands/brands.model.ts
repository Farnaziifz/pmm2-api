import * as mongoose from 'mongoose';

export const BrandsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  synopsis: { type: String, required: true },
  qoute: { type: String, required: true },
  madeBy: { type: String, required: true },
  score: { type: String, required: true },
});

export interface Brands {
  id: string;
  title: string;
  description: string;
  image: string;
  synopsis: string;
  qoute: string;
  madeBy: string;
  score: string;
}
