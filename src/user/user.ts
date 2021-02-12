import { Document } from 'mongoose';

export interface User extends Document {
  username: string;
  readonly password: string;
  address: string[];
  created: Date;
}
