import { Document } from 'mongoose';

export interface Teams extends Document {
  readonly fullname: string;
  readonly description: string;
  readonly title: string;
}
