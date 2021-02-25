import { Document } from 'mongoose';

export interface ContactForm extends Document {
  readonly full_name: string;
  readonly email: string;
  readonly mobile: string;
  readonly mesaage: string;
  readonly status: boolean;
}
