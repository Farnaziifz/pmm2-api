import { Document } from 'mongoose';

export interface Order extends Document {
  readonly title: string;
  readonly description: string;
}
