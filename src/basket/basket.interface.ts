import { Document } from 'mongoose';

export interface Basket extends Document {
  readonly userID: string;
  readonly productList: string;
}
