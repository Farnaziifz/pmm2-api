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
  Put,
} from '@nestjs/common';
import { PreFactorService } from './pre-factor.service';
import { CreatePreFactorDTO } from './dto/create-pre-.dto';

@Controller('pre-factor')
export class PreFactorController {
  constructor(private preFactorService: PreFactorService) {}

  @Post('create')
  async createProduct(
    @Res() res,
    @Body() createPreFactorDTO: CreatePreFactorDTO,
  ) {
    const data = await this.preFactorService.createPreFactor(
      createPreFactorDTO,
    );
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'data added succefuly',
      data,
    });
  }

  @Get('/:id')
  async getPreFactorByUserId(@Res() res, @Param('id') id) {
    const data = await this.preFactorService.getServicesByUserId(id);
    if (!data) throw new NotFoundException('data does not exist!');
    return res.status(HttpStatus.OK).json({ data, statusCode: 200 });
  }
}
