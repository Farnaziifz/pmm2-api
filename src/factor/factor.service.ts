import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Factor } from './factor.interface';
import { CreateFactorDTO } from './dto/create-factor.dto';
@Injectable()
export class FactorService {
  constructor(
    @InjectModel('Factor')
    private readonly FactorModel: Model<Factor>,
  ) {}

  async createFactor(createFactorDTO: CreateFactorDTO): Promise<Factor> {
    const data = await new this.FactorModel(createFactorDTO);
    return data.save();
  }

  async getFactorByUserId(id): Promise<Factor> {
    const data = await this.FactorModel.find({ user_id: id });
    return data;
  }

  async getAllFactor(): Promise<Factor[]> {
    const data = await this.FactorModel.find().exec();
    return data;
  }

  async getFactorById(id): Promise<Factor> {
    const data = await this.FactorModel.findById(id).exec();
    return data;
  }
}
