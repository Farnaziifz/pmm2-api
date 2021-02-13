import { Document } from 'mongoose';

export interface ProductCategory extends Document {
  readonly title: string;
  readonly image: string;
}
