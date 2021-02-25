import { Document } from 'mongoose';

export interface Brands extends Document {
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly synopsis: string;
  readonly qoute: string;
  readonly madeBy: string;
  readonly score: string;
}
