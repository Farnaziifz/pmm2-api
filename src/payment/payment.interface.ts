import { Document } from 'mongoose';

export interface Payment extends Document {
  readonly order_id: string;
  readonly callback: string;
  readonly amount: number;
}
