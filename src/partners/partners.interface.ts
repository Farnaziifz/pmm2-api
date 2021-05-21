import { Document } from 'mongoose';

export interface Partners extends Document {
  readonly name: string;
  readonly image: string;
}
