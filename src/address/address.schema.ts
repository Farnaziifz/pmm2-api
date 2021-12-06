import * as mongoose from 'mongoose';

export const AddressSchema = new mongoose.Schema({
  userId: String,
  address: String,
});
