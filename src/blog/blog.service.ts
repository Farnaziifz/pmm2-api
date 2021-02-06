import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Blog } from './blog.interface';
import { CreateBlogDTO } from './dto/create-blog.dto';

@Injectable()
export class BlogService {
  constructor(@InjectModel('Blog') private readonly blogModel: Model<Blog>) {}

  async getAllBlogs(): Promise<Blog[]> {
    const blogs = await this.blogModel.find().exec();
    return blogs;
  }

  async getBlogById(id): Promise<Blog> {
    const blog = await this.blogModel.findById(id).exec();
    return blog;
  }

  async createBlog(createBlogDTO: CreateBlogDTO): Promise<Blog> {
    const newBlog = await new this.blogModel(createBlogDTO);

    return newBlog.save();
  }

  async updateBlog(blogID, createBlogDTO: CreateBlogDTO): Promise<Blog> {
    const updateBlog = await this.blogModel.findByIdAndUpdate(
      blogID,
      createBlogDTO,
      { new: true },
    );

    return updateBlog;
  }

  async deleteBlog(blogID): Promise<any> {
    const deleteBlog = await this.blogModel.findByIdAndRemove(blogID);
    return deleteBlog;
  }
}
