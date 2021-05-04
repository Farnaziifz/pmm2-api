import { Document } from 'mongoose';

export interface Blogs extends Document {
  readonly name: string;
  readonly image: string;
  readonly category_name: string;
  readonly category_id: string;
  readonly tag_id: string;
  readonly tag_name: string;
  readonly synopsis: string;
  readonly description: string;
}
