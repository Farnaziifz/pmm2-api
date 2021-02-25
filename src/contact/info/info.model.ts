import * as mongoose from 'mongoose';

export const ContactInfoSchema = new mongoose.Schema({
  address: { type: String, required: true },
  phone: { type: String, required: true },
  fax: { type: String, required: false },
  mobile: { type: String, required: false },
  email: { type: String, required: false },
  pintrest: { type: String, required: false },
  whatsapp: { type: String, required: false },
  telegram: { type: String, required: false },
  twitter: { type: String, required: false },
  instagram: { type: String, required: false },
  facebook: { type: String, required: false },
  linkedin: { type: String, required: false },
});

export interface ContactInfo {
  id: string;
  address: string;
  phone: string;
  fax: string;
  mobile: string;
  email: string;
  pintrest: string;
  whatsapp: string;
  telegram: string;
  twitter: string;
  instagram: string;
  facebook: string;
  linkedin: string;
}
