import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Spec } from './spec.interface';
import { CreateSpecDTO } from '../dto/create-spec.dto';

@Injectable()
export class SpecService {
  constructor(
    @InjectModel('Spec')
    private readonly specModel: Model<Spec>,
  ) {}

  async getAllSpec(): Promise<Spec[]> {
    const specs = await this.specModel.find().exec();
    return specs;
  }
  async createSpect(createSpecDTO: CreateSpecDTO): Promise<Spec> {
    const newSpec = await new this.specModel(createSpecDTO);
    return newSpec.save();
  }
}
