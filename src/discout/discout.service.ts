import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Discount } from './discount.interface';
import { CreateDiscountDTO } from './dto/discount-dto';
import { Model } from 'mongoose';

@Injectable()
export class DiscoutService {
  constructor(
    @InjectModel('Discount')
    private readonly discountModel: Model<Discount>,
  ) {}

  async getAllCode(): Promise<Discount[]> {
    const data = await this.discountModel.find().exec();
    return data;
  }

  async createBlog(createDiscountDTO: CreateDiscountDTO): Promise<Discount> {
    const data = await new this.discountModel(createDiscountDTO);
    return data.save();
  }

  async getDiscountByCode(id): Promise<Discount[]> {
    const data = await this.discountModel.find({ code: id });
    return data;
  }
}
