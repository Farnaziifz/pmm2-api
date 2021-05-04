import * as mongoose from 'mongoose';

export const CertsSchema = new mongoose.Schema({
  title: String,
  image: String,
  description: String,
});
