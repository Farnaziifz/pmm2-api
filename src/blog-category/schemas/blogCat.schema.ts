import * as mongoos from 'mongoose';

export const BlogCatSchema = new mongoos.Schema({
  cat_name: String
})