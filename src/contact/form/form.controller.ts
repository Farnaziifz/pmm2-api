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
import { FormService } from './form.service';
import { CreateContactFormDTO } from '../dto/create-contact-form';
@Controller('form')
export class FormController {
  constructor(private formService: FormService) {}

  @Get()
  async getAllContactForm(@Res() res) {
    const contactForm = await this.formService.getAllContactForm();
    return res.status(HttpStatus.OK).json(contactForm);
  }

  @Post('create')
  async createContactForm(
    @Res() res,
    @Body() createContactFormDTO: CreateContactFormDTO,
  ) {
    const contactForm = await this.formService.createContactForm(
      createContactFormDTO,
    );
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'Message added succefuly',
      contactForm,
    });
  }

  @Get('/:id')
  async getContactForm(@Res() res, @Param('id') id) {
    const contactForm = await this.formService.getFormById(id);
    if (!contactForm) throw new NotFoundException('item does not exist!');
    return res.status(HttpStatus.OK).json(contactForm);
  }
}
