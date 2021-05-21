import * as mongoose from 'mongoose';

export const PartnersSchema = new mongoose.Schema({
  name: String,
  image: String,
});
