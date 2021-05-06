import { Document } from 'mongoose';

interface Address {
  add1: string;
  zipcode: string;
}

export interface User extends Document {
  username: string;
  readonly password: string;
  address: Address;
  created: Date;
}
