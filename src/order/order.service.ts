import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './order.interface';
import { CreateOrderDTO } from './dto/create-order';
import axios from 'axios';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel('Order')
    private readonly OrderModel: Model<Order>,
  ) {}

  async getOrderStatus(createOrderDTO: CreateOrderDTO): Promise<any> {
    const headersRequest = {
      'X-SANDBOX': '1',
      'X-API-KEY': '6a7f99eb-7c20-4412-a972-6dfb7cd253a4',
      'Content-Type': 'application/json',
    };
    const res = await axios
      .post('https://api.idpay.ir/v1.1/payment/verify', createOrderDTO, {
        headers: headersRequest,
      })
      .catch((e) => {
        return e.response;
      });
    return res.data;
  }
}
