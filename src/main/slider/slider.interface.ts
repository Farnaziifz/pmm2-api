import { Document } from 'mongoose';

export interface Slider extends Document {
  readonly title: string;
  readonly url: string;
  readonly image: string;
}
