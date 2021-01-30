import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blog } from './blog.model';

@Injectable()
export class BlogService {
  private blogs: Blog[] = [];
  constructor(@InjectModel('Blog') private readonly blogModel: Model<any>) {}

  getAllBlogs(): Blog[] {
    return this.blogs;
  }

  getBlogById(id: string): Blog {
    return this.blogs.find((item) => item.id === id);
  }

  createBlog(title: string, description: string) {
    const newBlog = new this.blogModel({
      title,
      description,
    });

    const res = newBlog.save();
    return res;
  }

  deleteTask(id: string): void {
    this.blogs = this.blogs.filter((item) => item.id != id);
  }
}
