import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { DiscoutService } from './discout.service';
import { CreateDiscountDTO } from './dto/discount-dto';

@Controller('discout')
export class DiscoutController {
  constructor(private discountService: DiscoutService) {}

  @Get()
  async getAllDiscount(@Res() res) {
    const data = await this.discountService.getAllCode();
    return res.status(HttpStatus.OK).json({ data, statusCode: 200 });
  }

  @Get('/:id')
  async getBlogByCat(@Res() res, @Param('id') id) {
    const data = await this.discountService.getDiscountByCode(id);
    return res.status(HttpStatus.OK).json({ data, statusCode: 200 });
  }

  @Post('/create')
  async createProduct(
    @Res() res,
    @Body() createDiscountDTO: CreateDiscountDTO,
  ) {
    const data = await this.discountService.createBlog(createDiscountDTO);
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'data added succefuly',
      data,
    });
  }
}
