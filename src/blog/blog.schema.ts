import * as mongoose from 'mongoose';

export const BlogsSchema = new mongoose.Schema({
  name: String,
  image: String,
  category_name: String,
  category_id: String,
  tag_id: String,
  tag_name: String,
  synopsis: String,
  description: String,
});
