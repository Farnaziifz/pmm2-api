import { Document } from 'mongoose';

export interface Certs extends Document {
  readonly title: string;
  readonly image: string;
  readonly description: string;
}
