import { Document } from 'mongoose';

export interface PreFactor extends Document {
  readonly user_id: string;
  readonly order_id: string;
  readonly user_name: string;
  readonly product: string[];
}
