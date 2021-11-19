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
    // const headersRequest = new Headers();
    // headersRequest.append('X-SANDBOX', '1');
    // headersRequest.append('X-API-KEY', '6a7f99eb-7c20-4412-a972-6dfb7cd253a4');

    const headersRequest = {
      'X-SANDBOX': '1',
      'X-API-KEY': '6a7f99eb-7c20-4412-a972-6dfb7cd253a4',
    };

    // return this.httpService.post(
    //   'https://api.idpay.ir/v1.1/payment',
    //   createPaymentDTO,
    //   { headers: headersRequest },
    // );
    console.log('before try');
    try {
      const res = await axios.post(
        'https://api.idpay.ir/v1.1/payment',
        createPaymentDTO,
        { headers: headersRequest },
      );
      console.log('salam');
      return res;
    } catch {
      (e) => {
        console.log('sss', e.response);
      };
    }
  }

  //   return new Promise((resolve, reject) => {
  //     axios().then(response => {
  //         resolve(response.data)
  //     })
  //     .catch(e => {
  //         reject(e)
  //     })
  // })
}
