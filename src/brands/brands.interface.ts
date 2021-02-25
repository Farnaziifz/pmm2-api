import { Document } from 'mongoose';

export interface Brands extends Document {
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly synopsis: string;
  readonly qoute: string;
  readonly score: string;
  readonly madeBy: string;
}
