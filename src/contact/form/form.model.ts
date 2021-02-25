import * as mongoose from 'mongoose';

export const ContactFormSchema = new mongoose.Schema({
  full_name: { type: String, required: true },
  email: { type: String, required: false },
  mobile: { type: String, required: true },
  message: { type: String, required: true },
  status: { type: Boolean, required: true },
});

export interface ContactForm {
  id: string;
  full_name: string;
  email: string;
  mobile: string;
  mesaage: string;
  status: boolean;
}
