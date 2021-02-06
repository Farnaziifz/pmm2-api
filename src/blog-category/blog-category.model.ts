import * as mongoose from 'mongoose';

export const BlogCatSchema = new mongoose.Schema({
  title: { type: String, required: true },
});

export interface Blog {
  id: string;
  title: string;
}
