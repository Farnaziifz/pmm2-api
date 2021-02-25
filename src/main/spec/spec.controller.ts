import { Body, Controller, Get, Post, Res, HttpStatus } from '@nestjs/common';
import { SpecService } from './spec.service';
import { CreateSpecDTO } from '../dto/create-spec.dto';

@Controller('spec')
export class SpecController {
  constructor(private specService: SpecService) {}

  @Get()
  async getAllSpec(@Res() res) {
    const specs = await this.specService.getAllSpec();
    return res.status(HttpStatus.OK).json(specs);
  }

  @Post('create')
  async createBrand(@Res() res, @Body() createSpecDTO: CreateSpecDTO) {
    const spec = await this.specService.createSpect(createSpecDTO);
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'spec added succefuly',
      spec,
    });
  }
}
