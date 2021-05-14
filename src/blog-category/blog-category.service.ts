import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BlogCategory } from './blog-category.interfce';
import { CreateBlogCategoryDTO } from './dto/create-blog-category.dto';

@Injectable()
export class BlogCategoryService {
  constructor(
    @InjectModel('BlogCategory')
    private readonly BlogCatModel: Model<BlogCategory>,
  ) {}

  async getAllBlogCats(): Promise<BlogCategory[]> {
    const blogCats = await this.BlogCatModel.find().exec();
    return blogCats;
  }

  async createBlogCat(
    createBlogCategoryDTO: CreateBlogCategoryDTO,
  ): Promise<BlogCategory> {
    const newBlogCats = await new this.BlogCatModel(createBlogCategoryDTO);

    return newBlogCats.save();
  }
  async getBlogCatById(id): Promise<BlogCategory> {
    const blog = await this.BlogCatModel.findById(id).exec();
    return blog;
  }

  async deleteCategory(id): Promise<any> {
    const data = await this.BlogCatModel.findByIdAndRemove(id);
    return data;
  }
}
