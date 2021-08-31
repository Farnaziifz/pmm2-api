import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Basket } from './basket.interface';
import { CreateBasketDTO } from './dto/create-basket.dto';



@Injectable()
export class BasketService {
  constructor(
    @InjectModel('Basket')
    private readonly BasketModel: Model<Basket>,
  ) {}

  async getUserBasket(id): Promise<Basket[]>{
    const data = await this.BasketModel.find({userID: id})
    return data;
  }

  async createBasket(createBasketDTO: CreateBasketDTO): Promise<Basket> {
      const data = await new this.BasketModel(createBasketDTO);
      return data.save();
  }

  async updateBasket(id, createBasketDTO: CreateBasketDTO): Promise<Basket> {
      const data  = await this.BasketModel.findByIdAndUpdate(id, createBasketDTO, {new: true})
      return data
  }
  async deleteBasket(id): Promise<any> {
    const data = await this.BasketModel.findByIdAndRemove(id)
    return data
  }
}