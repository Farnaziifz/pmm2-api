import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ContactInfo } from './info.interfce';
import { CreateContactIntoDTO } from '../dto/create-contact-info.dto';

@Injectable()
export class InfoService {
  constructor(
    @InjectModel('ContactInfo')
    private readonly ContactInfoModel: Model<ContactInfo>,
  ) {}

  async createContactInfo(
    createContactIntoDTO: CreateContactIntoDTO,
  ): Promise<ContactInfo> {
    const newContactInfo = await new this.ContactInfoModel(
      createContactIntoDTO,
    );
    return newContactInfo.save();
  }
  async getInfoById(id): Promise<ContactInfo> {
    const info = await this.ContactInfoModel.findById(id).exec();
    return info;
  }
}
