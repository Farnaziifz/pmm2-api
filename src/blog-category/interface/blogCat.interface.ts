import { Document } from 'mongoose';

export interface BlogCategory extends Document {
  readonly cat_name: string
}
