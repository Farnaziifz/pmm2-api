import * as mongoose from 'mongoose';

export const BlogCommentSchema = new mongoose.Schema({
  name: String,
  family: String,
  phone: String,
  subject: String,
  comment: String,
  blog_id: String,
  status: Boolean,
});
