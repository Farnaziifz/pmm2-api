import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Inquery } from './inquery.interface';
import { CreateInqueryDTO } from './dto/create-inquery.dto';
import axios from 'axios';
@Injectable()
export class InqueryService {
  constructor(
    @InjectModel('Inquery')
    private readonly InqueryModel: Model<Inquery>,
  ) {}

  async getInquery(createInqueryDTO: CreateInqueryDTO): Promise<any> {
    const headersRequest = {
      'X-SANDBOX': '1',
      'X-API-KEY': '6a7f99eb-7c20-4412-a972-6dfb7cd253a4',
      'Content-Type': 'application/json',
    };
    const res = await axios.post(
      'https://api.idpay.ir/v1.1/payment/inquiry',
      createInqueryDTO,
      {
        headers: headersRequest,
      },
    );
    return res.data;
  }
}
