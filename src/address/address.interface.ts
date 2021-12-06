import { Document } from 'mongoose';

export interface Address extends Document {
  readonly userId: string;
  readonly address: string;
}
