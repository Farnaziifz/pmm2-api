import * as mongoose from 'mongoose';

export const BlogTagSchema = new mongoose.Schema({
  title: { type: String, required: true },
});

export interface BlogTag {
  id: string;
  title: string;
}
