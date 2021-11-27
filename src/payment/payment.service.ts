import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { CreatePaymentDTO } from './dto/create-payment.dto';
import axios from 'axios';

@Injectable()
export class PaymentService {
  constructor(private httpService: HttpService) {}

  async createOrder(createPaymentDTO: CreatePaymentDTO): Promise<any> {
    const headersRequest = {
      'X-SANDBOX': '1',
      'X-API-KEY': '6a7f99eb-7c20-4412-a972-6dfb7cd253a4',
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
