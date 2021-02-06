import { Document } from 'mongoose';

export interface BlogCategory extends Document {
  readonly title: string;
}
