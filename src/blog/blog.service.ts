import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Blogs } from './blog.interface';
import { CreateBlogDTO } from './dto/create-blog.dto';

@Injectable()
export class BlogService {
  constructor(
    @InjectModel('Blogs')
    private readonly BlogsModel: Model<Blogs>,
  ) {}

  async getAllBlog(): Promise<Blogs[]> {
    const data = await this.BlogsModel.find().exec();
    return data;
  }

  async createBlog(createBlogDTO: CreateBlogDTO): Promise<Blogs> {
    const newProduct = await new this.BlogsModel(createBlogDTO);
    return newProduct.save();
  }
  async getBlogById(id): Promise<Blogs> {
    const data = await this.BlogsModel.findById(id).exec();
    return data;
  }
}
