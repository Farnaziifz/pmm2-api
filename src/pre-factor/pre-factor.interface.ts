import { Document } from 'mongoose';

export interface PreFactor extends Document {
  readonly user_id: string;
  readonly order_id: string;
  readonly product: string[];
}
