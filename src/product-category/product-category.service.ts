import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ProductCategory } from './product-category.interface';
import { CreateProductCategoryDTO } from './dto/create-product-category';

@Injectable()
export class ProductCategoryService {
  constructor(
    @InjectModel('ProductCategory')
    private readonly ProductCategoryModel: Model<ProductCategory>,
  ) {}

  async getAllProductCategory(): Promise<ProductCategory[]> {
    const productCategory = await this.ProductCategoryModel.find().exec();
    return productCategory;
  }

  async getCat(id): Promise<ProductCategory> {
    const data = await this.ProductCategoryModel.findById(id).exec();
    return data;
  }

  async CreateProductCategory(
    createProductCategoryDTO: CreateProductCategoryDTO,
  ): Promise<ProductCategory> {
    const newProductCategory = await new this.ProductCategoryModel(
      createProductCategoryDTO,
    );
    return newProductCategory.save();
  }

  async deleteProduct(id): Promise<any> {
    const data = await this.ProductCategoryModel.findByIdAndRemove(id);
    return data;
  }

  async updateCat(
    id,
    createProductCategoryDTO: CreateProductCategoryDTO,
  ): Promise<ProductCategory> {
    const data = await this.ProductCategoryModel.findByIdAndUpdate(
      id,
      createProductCategoryDTO,
      { new: true },
    );

    return data;
  }
}
