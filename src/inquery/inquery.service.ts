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
      'X-API-KEY': '0f0c73c5-b7fd-4596-9438-4179476e3795',
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
