import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Services } from './services.interface';
import { CreateServicesDTO } from './dto/create-services.dto';

@Injectable()
export class ServicesService {
  constructor(
    @InjectModel('Services')
    private readonly servicesModel: Model<Services>,
  ) {}

  async getAllServices(): Promise<Services[]> {
    const data = await this.servicesModel.find().exec();
    return data;
  }

  async createProducts(
    createServicesDTO: CreateServicesDTO,
  ): Promise<Services> {
    const data = await new this.servicesModel(createServicesDTO);
    return data.save();
  }

  async getServicesById(id): Promise<Services> {
    const data = await this.servicesModel.findById(id).exec();
    return data;
  }

  async deleteServices(id): Promise<any> {
    const data = await this.servicesModel.findByIdAndRemove(id);
    return data;
  }

  async updateProduct(
    id,
    createServicesDTO: CreateServicesDTO,
  ): Promise<Services> {
    const data = await this.servicesModel.findByIdAndUpdate(
      id,
      createServicesDTO,
      { new: true },
    );

    return data;
  }
}
