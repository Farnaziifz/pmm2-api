import { Document } from 'mongoose';

export interface Services extends Document {
  readonly name: string;
  readonly image: string;
  readonly description: string;
}
