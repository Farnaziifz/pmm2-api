import { Document } from 'mongoose';

export interface Discount extends Document {
  readonly amount: string;
  readonly text: string;
  readonly owner: string;
  readonly code: string;
}
