import { Document } from 'mongoose';

export interface ProductComment extends Document {
  readonly name: string;
  readonly phone: string;
  readonly subject: string;
  readonly comment: string;
  readonly product_id: string;
  readonly status: boolean;
}
