import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BlogComment } from './blog-comment.interface';
import { CreateBlogCommentDTO } from './dto/create-blog-comment.dto';

@Injectable()
export class BlogCommentService {
  constructor(
    @InjectModel('BlogComment')
    private readonly BlogCommentModel: Model<BlogComment>,
  ) {}

  async getAllComment(): Promise<BlogComment[]> {
    const data = await this.BlogCommentModel.find().exec();
    return data;
  }

  async createBlogComment(
    createBlogCommentDTO: CreateBlogCommentDTO,
  ): Promise<BlogComment> {
    const newComment = await new this.BlogCommentModel(createBlogCommentDTO);
    return newComment.save();
  }

  async getCommentById(id): Promise<BlogComment> {
    const data = await this.BlogCommentModel.findById(id).exec();
    return data;
  }
}
