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
import { BrandsService } from './brands.service';
import { CreateBrandDTO } from './dto/create-brand.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('brands')
export class BrandsController {
  constructor(private brandsService: BrandsService) {}

  @Get()
  async getAllBrands(@Res() res) {
    const brands = await this.brandsService.getAllBrands();
    return res.status(HttpStatus.OK).json({ brands, statusCode: 200 });
  }

  @Post('create')
  @UseGuards(AuthGuard('jwt'))
  async createBrand(@Res() res, @Body() createBrandDTO: CreateBrandDTO) {
    const brand = await this.brandsService.createBrands(createBrandDTO);
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'Brand added succefuly',
      brand,
    });
  }

  @Get('/:id')
  async getBrand(@Res() res, @Param('id') id) {
    const brand = await this.brandsService.getBrandById(id);
    if (!brand) throw new NotFoundException('brand does not exist!');
    return res.status(HttpStatus.OK).json(brand);
  }

  @Delete('/delete/:id')
  @UseGuards(AuthGuard('jwt'))
  async deleteCat(@Res() res, @Param('id') id) {
    const data = await this.brandsService.deleteBrand(id);
    if (!data) throw new NotFoundException('data does not exist');
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'data has been deleted',
      data,
    });
  }
}
