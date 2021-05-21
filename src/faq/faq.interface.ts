import { Document } from 'mongoose';

export interface Faq extends Document {
  readonly title: string;
  readonly description: string;
}
