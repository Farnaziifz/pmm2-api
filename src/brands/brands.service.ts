import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Brands } from './brands.interface';
import { CreateBrandDTO } from './dto/create-brand.dto';

@Injectable()
export class BrandsService {
  constructor(
    @InjectModel('Brands')
    private readonly BrandsModel: Model<Brands>,
  ) {}

  async getAllBrands(): Promise<Brands[]> {
    const brands = await this.BrandsModel.find().exec();
    return brands;
  }

  async createBrands(createBrandDTO: CreateBrandDTO): Promise<Brands> {
    const newBrands = await new this.BrandsModel(createBrandDTO);
    return newBrands.save();
  }

  async getBrandById(id): Promise<Brands> {
    const brand = await this.BrandsModel.findById(id).exec();
    return brand;
  }

  async deleteBrand(id): Promise<any> {
    const data = await this.BrandsModel.findByIdAndRemove(id);
    return data;
  }
}
