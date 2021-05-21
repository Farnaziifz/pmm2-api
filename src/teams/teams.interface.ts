import { Document } from 'mongoose';

export interface Teams extends Document {
  readonly name: string;
  readonly image: string;
}
