import { Document } from 'mongoose';

export interface Factor extends Document {
  readonly track_id: string;
  readonly transaction_id: string;
  readonly order_id: string;
  readonly amount: string;
  readonly date: string;
  readonly user_id: string;
  readonly status: boolean;
  readonly user_name: string;
  readonly product: string[];
  readonly user_address: string;
  readonly code: string;

}
