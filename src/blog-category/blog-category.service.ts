import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BlogCategory } from './interface/blogCat.interface';
import { CreateBlogCatDTO } from './dto/create-blog-cat.dto';

@Injectable()
export class BlogCategoryService {
  constructor(
    @InjectModel('BlogCategory')
    private readonly BlogCatModel: Model<BlogCategory>,
  ) {}

  async getAllCategory(): Promise<BlogCategory[]> {
    const blogCat = await this.BlogCatModel.find().exec();
    return blogCat;
  }

  async addCategory(
    createBlogCategory: CreateBlogCatDTO,
  ): Promise<BlogCategory> {
    const newCat = await new this.BlogCatModel(createBlogCategory);
    return newCat;
  }
}
