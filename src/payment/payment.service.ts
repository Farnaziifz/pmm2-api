import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CreatePaymentDTO } from './dto/create-payment.dto';
import axios from 'axios';

@Injectable()
export class PaymentService {
  constructor(private httpService: HttpService) {}

  async createOrder(createPaymentDTO: CreatePaymentDTO): Promise<any> {
    const headersRequest = {
      // 'X-SANDBOX': '1',
      'X-API-KEY': '0f0c73c5-b7fd-4596-9438-4179476e3795',
      'Content-Type': 'application/json',
    };
    const res = await axios
      .post('https://api.idpay.ir/v1.1/payment', createPaymentDTO, {
        headers: headersRequest,
      })
      .catch((e) => {
        return e.response;
      });
    return res.data;
  }
}
