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
import { FaqService } from './faq.service';
import { CreateFaqDTO } from './dto/create-faq';
import { AuthGuard } from '@nestjs/passport';

@Controller('faq')
export class FaqController {
  constructor(private faqService: FaqService) {}

  @Get()
  async getAllData(@Res() res) {
    const data = await this.faqService.getAllData();
    return res.status(HttpStatus.OK).json({ data, statusCode: 200 });
  }

  @Post('create')
  async createProduct(@Res() res, @Body() createFaqDTO: CreateFaqDTO) {
    const data = await this.faqService.createFaq(createFaqDTO);
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'data added succefuly',
      data,
    });
  }

  @Get('/:id')
  async getCerts(@Res() res, @Param('id') id) {
    const data = await this.faqService.getFaqById(id);
    if (!data) throw new NotFoundException('data does not exist!');
    return res.status(HttpStatus.OK).json({ data, statusCode: 200 });
  }

  @Delete('/delete/:id')
  @UseGuards(AuthGuard('jwt'))
  async deleteCat(@Res() res, @Param('id') id) {
    const data = await this.faqService.deleteFaq(id);
    if (!data) throw new NotFoundException('data does not exist');
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'data has been deleted',
      data,
    });
  }

  @Put('/update/:id')
  async updateProduct(
    @Res() res,
    @Param('id') id,
    @Body() createFaqDTO: CreateFaqDTO,
  ) {
    const data = await this.faqService.updateData(id, createFaqDTO);
    if (!data) throw new NotFoundException('data does not exist!');
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'data has been successfully updated',
      data,
    });
  }
}
