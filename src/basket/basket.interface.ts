import { Document } from 'mongoose';

export interface Basket extends Document {
  readonly userID: string;
  readonly id: string;
  readonly productname: string;
  readonly productename: string;
  readonly productprice: string;
  readonly productimage: string;
  readonly productcount: string;
}
