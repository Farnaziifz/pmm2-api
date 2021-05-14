import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  HttpStatus,
  NotFoundException,
  UseGuards,
  Delete,
} from '@nestjs/common';

import { BlogCategoryService } from './blog-category.service';
import { CreateBlogCategoryDTO } from './dto/create-blog-category.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('blog-category')
export class BlogCategoryController {
  constructor(private blogCategoryService: BlogCategoryService) {}

  @Get()
  async getAllBlogCats(@Res() res) {
    const data = await this.blogCategoryService.getAllBlogCats();
    return res.status(HttpStatus.OK).json({ data, statusCode: 200 });
  }

  @Post('create')
  @UseGuards(AuthGuard('jwt'))
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

  @Delete('/delete/:id')
  @UseGuards(AuthGuard('jwt'))
  async deleteCat(@Res() res, @Param('id') id) {
    const data = await this.blogCategoryService.deleteCategory(id);
    if (!data) throw new NotFoundException('data does not exist');
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'data has been deleted',
      data,
    });
  }
}
