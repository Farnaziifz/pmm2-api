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
import { CertsService } from './certs.service';
import { CreateCertsDTO } from './dto/create-certs.dto';
@Controller('certs')
export class CertsController {
  constructor(private certsService: CertsService) {}

  @Get()
  async getAllProduct(@Res() res) {
    const data = await this.certsService.getAllCerts();
    return res.status(HttpStatus.OK).json({ data, statusCode: 200 });
  }

  @Post('create')
  async createProduct(@Res() res, @Body() createCertsDTO: CreateCertsDTO) {
    const data = await this.certsService.createProducts(createCertsDTO);
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'cert added succefuly',
      data,
    });
  }

  @Get('/:id')
  async getCerts(@Res() res, @Param('id') id) {
    const data = await this.certsService.getCertById(id);
    if (!data) throw new NotFoundException('data does not exist!');
    return res.status(HttpStatus.OK).json({ data, statusCode: 200 });
  }
}
