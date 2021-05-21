import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Certs } from './certs.interface';
import { CreateCertsDTO } from './dto/create-certs.dto';

@Injectable()
export class CertsService {
  constructor(
    @InjectModel('Certs')
    private readonly CertsModel: Model<Certs>,
  ) {}

  async getAllCerts(): Promise<Certs[]> {
    const data = await this.CertsModel.find().exec();
    return data;
  }

  async createProducts(createCertsDTO: CreateCertsDTO): Promise<Certs> {
    const newProduct = await new this.CertsModel(createCertsDTO);
    return newProduct.save();
  }

  async getCertById(id): Promise<Certs> {
    const data = await this.CertsModel.findById(id).exec();
    return data;
  }

  async deleteCerts(id): Promise<any> {
    const data = await this.CertsModel.findByIdAndRemove(id);
    return data;
  }

  async updateCerts(id, createCertsDTO: CreateCertsDTO): Promise<Certs> {
    const data = await this.CertsModel.findByIdAndUpdate(id, createCertsDTO, {
      new: true,
    });

    return data;
  }
}
