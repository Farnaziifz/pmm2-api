import * as mongoose from 'mongoose';

export const BasketSchema = new mongoose.Schema({
  userID: String,
  id: String,
  productname: String,
  productename: String,
  productprice: String,
  productimage: String,
  productcount: String,
});
