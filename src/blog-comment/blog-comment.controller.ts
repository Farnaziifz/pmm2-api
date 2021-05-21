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
import { BlogCommentService } from './blog-comment.service';
import { CreateBlogCommentDTO } from './dto/create-blog-comment.dto';

@Controller('blog-comment')
export class BlogCommentController {
  constructor(private blogCommentService: BlogCommentService) {}

  @Get()
  async getAllComment(@Res() res) {
    const data = await this.blogCommentService.getAllComment();
    return res.status(HttpStatus.OK).json({ data, statusCode: 200 });
  }

  @Post('create')
  async createProduct(
    @Res() res,
    @Body() createBlogCommentDTO: CreateBlogCommentDTO,
  ) {
    const data = await this.blogCommentService.createBlogComment(
      createBlogCommentDTO,
    );
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'comment added succefuly',
      data,
    });
  }

  @Get('/:id')
  async getProduct(@Res() res, @Param('id') id) {
    const data = await this.blogCommentService.getCommentById(id);
    if (!data) throw new NotFoundException('comment does not exist!');
    return res.status(HttpStatus.OK).json({ data, statusCode: 200 });
  }

  @Get('/byBlog/:id')
  async getProductCmByProduct(@Res() res, @Param('id') id) {
    const data = await this.blogCommentService.getCommentByBID(id);
    if (!data) throw new NotFoundException('no product');
    return res.status(HttpStatus.OK).json({ statusCode: 200, data });
  }
}
