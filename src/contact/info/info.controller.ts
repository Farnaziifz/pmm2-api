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
import { InfoService } from './info.service';
import { CreateContactIntoDTO } from '../dto/create-contact-info.dto';

@Controller('info')
export class InfoController {
  constructor(private infoService: InfoService) {}
  @Post('create')
  async createInfo(
    @Res() res,
    @Body() createContactIntoDTO: CreateContactIntoDTO,
  ) {
    const info = await this.infoService.createContactInfo(createContactIntoDTO);
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'info added succefuly',
      info,
    });
  }
  @Get('/:id')
  async getBrand(@Res() res, @Param('id') id) {
    const info = await this.infoService.getInfoById(id);
    if (!info) throw new NotFoundException('info does not exist!');
    return res.status(HttpStatus.OK).json(info);
  }
}
