import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Products } from './product.interface';
import { CreateProductDTO } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Products')
    private readonly ProductsModel: Model<Products>,
  ) {}

  async getAllProduct(): Promise<Products[]> {
    const data = await this.ProductsModel.find().exec();
    return data;
  }

  async createProducts(createProductDTO: CreateProductDTO): Promise<Products> {
    const newProduct = await new this.ProductsModel(createProductDTO);
    return newProduct.save();
  }

  async getProductById(id): Promise<Products> {
    const data = await this.ProductsModel.findById(id).exec();
    return data;
  }
}
