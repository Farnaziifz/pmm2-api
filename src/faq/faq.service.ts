import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Faq } from './faq.interface';
import { CreateFaqDTO } from './dto/create-faq';

@Injectable()
export class FaqService {
  constructor(
    @InjectModel('Faq')
    private readonly FaqModel: Model<Faq>,
  ) {}

  async getAllData(): Promise<Faq[]> {
    const data = await this.FaqModel.find().exec();
    return data;
  }

  async createFaq(createFaqDTO: CreateFaqDTO): Promise<Faq> {
    const data = await new this.FaqModel(createFaqDTO);
    return data.save();
  }

  async getFaqById(id): Promise<Faq> {
    const data = await this.FaqModel.findById(id).exec();
    return data;
  }

  async deleteFaq(id): Promise<any> {
    const data = await this.FaqModel.findByIdAndRemove(id);
    return data;
  }

  async updateData(id, createFaqDTO: CreateFaqDTO): Promise<Faq> {
    const data = await this.FaqModel.findByIdAndUpdate(id, createFaqDTO, {
      new: true,
    });

    return data;
  }
}
