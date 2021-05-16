import {
  Body,
  Controller,
  Get,
  Post,
  Res,
  HttpStatus,
  NotFoundException,
  UseGuards,
  Delete,
  Param,
} from '@nestjs/common';
import { ProductCategoryService } from './product-category.service';
import { CreateProductCategoryDTO } from './dto/create-product-category';
import { AuthGuard } from '@nestjs/passport';

@Controller('product-category')
export class ProductCategoryController {
  constructor(private productCategoryService: ProductCategoryService) {}

  @Get()
  async getAllProductCategory(@Res() res) {
    const productCategory = await this.productCategoryService.getAllProductCategory();
    return res.status(HttpStatus.OK).json({ productCategory, statusCode: 200 });
  }

  @Get('/:id')
  async getCat(@Res() res, @Param('id') id) {
    const data = await this.productCategoryService.getCat(id);
    if (!data) throw new NotFoundException('data does not exist!');
    return res.status(HttpStatus.OK).json({ data, statusCode: 200 });
  }

  @Post('create')
  async createProductCategory(
    @Res() res,
    @Body() createProductCategoryDTO: CreateProductCategoryDTO,
  ) {
    const productCategory = await this.productCategoryService.CreateProductCategory(
      createProductCategoryDTO,
    );

    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'product Category tag added succefuly',
      productCategory,
    });
  }

  @Delete('/delete/:id')
  @UseGuards(AuthGuard('jwt'))
  async deleteCat(@Res() res, @Param('id') id) {
    const data = await this.productCategoryService.deleteProduct(id);
    if (!data) throw new NotFoundException('data does not exist');
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'data has been deleted',
      data,
    });
  }
}
