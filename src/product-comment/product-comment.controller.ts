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
import { ProductCommentService } from './product-comment.service';
import { CreateProductCommentDTO } from './dto/create-product-comment.dto';
@Controller('product-comment')
export class ProductCommentController {
  constructor(private productCommentService: ProductCommentService) {}

  @Get()
  async getAllComment(@Res() res) {
    const data = await this.productCommentService.getAllComment();
    return res.status(HttpStatus.OK).json({ data, statusCode: 200 });
  }

  @Post('create')
  async createProduct(
    @Res() res,
    @Body() createProductCommentDTO: CreateProductCommentDTO,
  ) {
    const data = await this.productCommentService.createBlogComment(
      createProductCommentDTO,
    );
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'comment added succefuly',
      data,
    });
  }

  @Get('/:id')
  async getProduct(@Res() res, @Param('id') id) {
    const data = await this.productCommentService.getCommentById(id);
    if (!data) throw new NotFoundException('comment does not exist!');
    return res.status(HttpStatus.OK).json({ data, statusCode: 200 });
  }
}
