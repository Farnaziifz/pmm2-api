import { Document } from 'mongoose';

export interface Spec extends Document {
  readonly title: string;
  readonly image: string;
}
