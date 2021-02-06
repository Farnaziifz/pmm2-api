import { Document } from 'mongoose';

export interface Blog extends Document {
  readonly title: string;
  readonly description: string;
  readonly category: string[];
}
