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
import { CreateInqueryDTO } from './dto/create-inquery.dto';
import { InqueryService } from './inquery.service';
@Controller('inquery')
export class InqueryController {
  constructor(private inqueryService: InqueryService) {}

  @Post('create')
  async createInquery(@Res() res, @Body() createInqueryDTO: CreateInqueryDTO) {
    const data = await this.inqueryService.getInquery(createInqueryDTO);
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'data added succefuly',
      data,
    });
  }
}
