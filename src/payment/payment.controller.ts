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
    const data = await this.paymentService.createOrder(createPaymentDTO);
    return res.status(HttpStatus.OK).json({
      data,
      statusCode: 200,
      message: 'order added succefuly',
    });
  }
}
