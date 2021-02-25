import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';

import { BlogCategoryService } from './blog-category.service';
import { CreateBlogCategoryDTO } from './dto/create-blog-category.dto';

@Controller('blog-category')
export class BlogCategoryController {
  constructor(private blogCategoryService: BlogCategoryService) {}

  @Get()
  async getAllBlogCats(@Res() res) {
    const blogs = await this.blogCategoryService.getAllBlogCats();
    return res.status(HttpStatus.OK).json(blogs);
  }

  @Post('create')
  async createBlogCats(
    @Res() res,
    @Body() createBlogCategoryDTO: CreateBlogCategoryDTO,
  ) {
    const blog = await this.blogCategoryService.createBlogCat(
      createBlogCategoryDTO,
    );

    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'Blog category added succefuly',
      blog,
    });
  }

  @Get('/:id')
  async getBlog(@Res() res, @Param('id') id) {
    const blog = await this.blogCategoryService.getBlogCatById(id);
    if (!blog) throw new NotFoundException('Blog does not exist!');
    return res.status(HttpStatus.OK).json(blog);
  }
}
