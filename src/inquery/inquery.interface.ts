import { Document } from 'mongoose';

export interface Inquery extends Document {
  readonly order_id: string;
  readonly id: string;
}
