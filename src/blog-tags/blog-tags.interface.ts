import { Document } from 'mongoose';

export interface BlogTag extends Document {
  readonly title: string;
}
