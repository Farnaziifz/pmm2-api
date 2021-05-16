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
  // Put,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDTO } from './dto/create-blog.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @Get()
  async getAllBlog(@Res() res) {
    const data = await this.blogService.getAllBlog();
    return res.status(HttpStatus.OK).json({ data, statusCode: 200 });
  }

  @Get('byCat/:id')
  async getBlogByCat(@Res() res, @Param('id') id) {
    const data = await this.blogService.getBlogByCat(id);
    return res.statsu(HttpStatus.OK).json({ data, statusCode: 200 });
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async createProduct(@Res() res, @Body() createBlogDTO: CreateBlogDTO) {
    const data = await this.blogService.createBlog(createBlogDTO);
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'data added succefuly',
      data,
    });
  }

  @Delete('/delete/:id')
  @UseGuards(AuthGuard('jwt'))
  async deleteCat(@Res() res, @Param('id') id) {
    const data = await this.blogService.deleteBlog(id);
    if (!data) throw new NotFoundException('data does not exist');
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'data has been deleted',
      data,
    });
  }
}
