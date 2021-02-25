import { Body, Controller, Get, Post, Res, HttpStatus } from '@nestjs/common';
import { ProductCategoryService } from './product-category.service';
import { CreateProductCategoryDTO } from './dto/create-product-category';

@Controller('product-category')
export class ProductCategoryController {
  constructor(private productCategoryService: ProductCategoryService) {}

  @Get()
  async getAllProductCategory(@Res() res) {
    const productCategory = await this.productCategoryService.getAllProductCategory();
    return res.status(HttpStatus.OK).json(productCategory);
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
}
