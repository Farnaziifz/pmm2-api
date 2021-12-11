import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PreFactor } from './pre-factor.interface';
import { CreatePreFactorDTO } from './dto/create-pre-.dto';

@Injectable()
export class PreFactorService {
  constructor(
    @InjectModel('PreFactor')
    private readonly PreFactorModel: Model<PreFactor>,
  ) {}

  async createPreFactor(
    createPreFactorDTO: CreatePreFactorDTO,
  ): Promise<PreFactor> {
    const data = await new this.PreFactorModel(createPreFactorDTO);
    return data.save();
  }

  async getServicesByUserId(id): Promise<PreFactor> {
    const data = await this.PreFactorModel.find({ user_id: id });
    return data;
  }
}
