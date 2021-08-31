import * as mongoose from 'mongoose';

export const BasketSchema = new mongoose.Schema({
    userID: String,
    productList: String,
});
