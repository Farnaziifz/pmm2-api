import * as mongoose from 'mongoose';

export const SpecSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
});

export interface Spec {
  id: string;
  title: string;
  image: string;
}
