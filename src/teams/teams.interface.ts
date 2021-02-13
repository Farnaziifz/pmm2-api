import { Document } from 'mongoose';

export interface Teams extends Document {
  readonly title: string;
  readonly description: string;
  readonly fullname: string;
}
