import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Res,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDTO } from './dto/create-blog.dto';

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @Get()
  async getAllBlogs(@Res() res) {
    const blogs = await this.blogService.getAllBlogs();
    return res.status(HttpStatus.OK).json(blogs);
  }

  @Get('blog/:id')
  async getBlog(@Res() res, @Param('id') id) {
    const blog = await this.blogService.getBlogById(id);
    if (!blog) throw new NotFoundException('Blog does not exist!');
    return res.status(HttpStatus.OK).json(blog);
  }

  @Post('create')
  async createBlog(@Res() res, @Body() createBlogDTO: CreateBlogDTO) {
    const blog = await this.blogService.createBlog(createBlogDTO);

    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'Blog added succefully',
      blog,
    });
  }

  // @Delete('/:id')
  // deleteBlog(@Param('id') id: string): void {
  //   return this.blogService.deleteTask(id);
  // }
}
