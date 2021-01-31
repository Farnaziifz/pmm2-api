import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
// import { Blog } from './blog.model';
import { Blog } from './blog.interface';
import { CreateBlogDTO } from './dto/create-blog.dto';

@Injectable()
export class BlogService {
  // private blogs: Blog[] = [];
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

  // deleteTask(id: string): void {
  //   this.blogs = this.blogs.filter((item) => item.id != id);
  // }
}
