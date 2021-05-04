import { Document } from 'mongoose';

export interface BlogComment extends Document {
  readonly name: string;
  readonly family: string;
  readonly phone: string;
  readonly subject: string;
  readonly comment: string;
  readonly blog_id: string;
  readonly status: boolean;
}
