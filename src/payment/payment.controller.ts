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
  HttpService,
  Put,
} from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentDTO } from './dto/create-payment.dto';

@Controller('payment')
export class PaymentController {
  constructor(private paymentService: PaymentService) {}

  @Post('create')
  async getPeyment(@Res() res, @Body() createPaymentDTO: CreatePaymentDTO) {
    const farnaz = await this.paymentService.createOrder(createPaymentDTO);
    console.log('controool', farnaz);
    return res.status(HttpStatus.OK).json({
      farnaz,
      statusCode: 200,
      message: 'order added succefuly',
    });
  }
}
