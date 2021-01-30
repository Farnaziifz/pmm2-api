import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Blog } from './blog.model';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @Get()
  getAllBlogs(): Blog[] {
    return this.blogService.getAllBlogs();
  }

  @Get('/:id')
  getBlogById(@Param('id') id: string): Blog {
    return this.blogService.getBlogById(id);
  }

  @Post()
  createBlog(
    @Body('title') title: string,
    @Body('description') description: string,
  ) {
    return this.blogService.createBlog(title, description);
  }

  @Delete('/:id')
  deleteBlog(@Param('id') id: string): void {
    return this.blogService.deleteTask(id);
  }
}
