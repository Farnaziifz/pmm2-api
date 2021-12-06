import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Address } from './address.interface';
import { CreateAddressDTO } from './dto/create-address.dto';

@Injectable()
export class AddressService {
  constructor(
    @InjectModel('Address')
    private readonly AddressModel: Model<Address>,
  ) {}

  async getAllAddress(): Promise<Address[]> {
    const data = await this.AddressModel.find().exec();
    return data;
  }
  async createAddress(createAddressDTO: CreateAddressDTO): Promise<Address> {
    const data = await new this.AddressModel(createAddressDTO);
    return data.save();
  }

  async deletAddress(id): Promise<any> {
    const data = await this.AddressModel.findByIdAndRemove(id);
    return data;
  }
  async getAddressByUser(id): Promise<Address[]> {
    const data = await this.AddressModel.find({ userId: id });
    return data;
  }
}
