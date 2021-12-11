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
import { FactorService } from './factor.service';
import { CreateFactorDTO } from './dto/create-factor.dto';

@Controller('factor')
export class FactorController {
  constructor(private factorService: FactorService) {}
  @Get()
  async getAllFactor(@Res() res) {
    const data = await this.factorService.getAllFactor();
    return res.status(HttpStatus.OK).json({ data, statusCode: 200 });
  }

  @Post('create')
  async createProduct(@Res() res, @Body() createFactorDTO: CreateFactorDTO) {
    const data = await this.factorService.createFactor(createFactorDTO);
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'product added succefuly',
      data,
    });
  }

  @Get('byUser/:id')
  async getFactorById(@Res() res, @Param('id') id) {
    const data = await this.factorService.getFactorByUserId(id);
    if (!data) throw new NotFoundException('product does not exist!');
    return res.status(HttpStatus.OK).json({ data, statusCode: 200 });
  }

  @Get('/:id')
  async getProduct(@Res() res, @Param('id') id) {
    const data = await this.factorService.getFactorByUserId(id);
    if (!data) throw new NotFoundException('product does not exist!');
    return res.status(HttpStatus.OK).json({ data, statusCode: 200 });
  }
}
