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
import { OrderService } from './order.service';
import { CreateOrderDTO } from './dto/create-order';
@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post('create')
  async createProduct(@Res() res, @Body() createOrderDTO: CreateOrderDTO) {
    const data = await this.orderService.getOrderStatus(createOrderDTO);
    console.log(data);
    if (data.status === 100) {
      return res.redirect(
        HttpStatus.MOVED_PERMANENTLY,
        `https://localhost:8080/result/1/${data.payment.track_id}/${data.order_id}/${data.amount}/${data.payment.date}`,
      );
    }
    if (data.status !== 100) {
      console.log(data);
      return res.redirect(
        HttpStatus.MOVED_PERMANENTLY,
        `https://localhost:8080/result/0`,
      );
    }
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'data added succefuly',
      data,
    });
  }
}
