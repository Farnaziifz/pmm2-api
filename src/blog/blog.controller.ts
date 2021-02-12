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
  Put,
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

  @Post('create')
  async createBlog(@Res() res, @Body() createBlogDTO: CreateBlogDTO) {
    const blog = await this.blogService.createBlog(createBlogDTO);

    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'Blog added succefuly',
      blog,
    });
  }

  @Get('/:id')
  async getBlog(@Res() res, @Param('id') id) {
    const blog = await this.blogService.getBlogById(id);
    if (!blog) throw new NotFoundException('Blog does not exist!');
    return res.status(HttpStatus.OK).json(blog);
  }

  @Put('/update/:id')
  async updateBlog(
    @Res() res,
    @Param('id') id,
    @Body() createBlogDTO: CreateBlogDTO,
  ) {
    const blog = await this.blogService.updateBlog(id, createBlogDTO);
    if (!blog) throw new NotFoundException('Blog does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Blog has been successfully updated',
      blog,
    });
  }

  @Delete('/delete/:id')
  async deleteBlog(@Res() res, @Param('id') id) {
    const blog = await this.blogService.deleteBlog(id);
    if (!blog) throw new NotFoundException('Blog does not exist');
    return res.status(HttpStatus.OK).json({
      message: 'Blog has been deleted',
      blog,
    });
  }
}
