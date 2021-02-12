import * as mongoose from 'mongoose';

export const TeamsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  fullname: String,
});

export interface Team {
  id: string;
  title: string;
  description: string;
  fullname: string;
}
