import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Partners } from './partners.interface';
import { CreatePartnersDTO } from './dto/create-partners.dto';

@Injectable()
export class PartnersService {
  constructor(
    @InjectModel('Partners')
    private readonly PartnersModel: Model<Partners>,
  ) {}

  async getAllPartners(): Promise<Partners[]> {
    const data = await this.PartnersModel.find().exec();
    return data;
  }

  async createPartners(
    createPartnersDTO: CreatePartnersDTO,
  ): Promise<Partners> {
    const data = await new this.PartnersModel(createPartnersDTO);
    return data.save();
  }

  async getPartnerById(id): Promise<Partners> {
    const data = await this.PartnersModel.findById(id).exec();
    return data;
  }

  async deletePartner(id): Promise<any> {
    const data = await this.PartnersModel.findByIdAndRemove(id);
    return data;
  }

  async updatePartner(
    id,
    createPartnersDTO: CreatePartnersDTO,
  ): Promise<Partners> {
    const data = await this.PartnersModel.findByIdAndUpdate(
      id,
      createPartnersDTO,
      {
        new: true,
      },
    );

    return data;
  }
}
