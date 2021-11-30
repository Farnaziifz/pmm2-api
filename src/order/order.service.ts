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
    const res = await axios
      .post('https://api.idpay.ir/v1.1/payment/verify', createOrderDTO)
      .catch((e) => {
        return e.response;
      });
      
    return res;
  }
}
