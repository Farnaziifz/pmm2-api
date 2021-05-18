import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ProductComment } from './product-comment.interface';
import { CreateProductCommentDTO } from './dto/create-product-comment.dto';

@Injectable()
export class ProductCommentService {
  constructor(
    @InjectModel('ProductComment')
    private readonly ProductCommentModel: Model<ProductComment>,
  ) {}

  async getAllComment(): Promise<ProductComment[]> {
    const data = await this.ProductCommentModel.find().exec();
    return data;
  }

  async createBlogComment(
    createProductCommentDTO: CreateProductCommentDTO,
  ): Promise<ProductComment> {
    const newComment = await new this.ProductCommentModel(
      createProductCommentDTO,
    );
    return newComment.save();
  }

  async getCommentById(id): Promise<ProductComment> {
    const data = await this.ProductCommentModel.findById(id).exec();
    return data;
  }
}
