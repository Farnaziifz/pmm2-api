import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Slider } from './slider.interface';
import { CreateSliderDTO } from '../dto/create-slider.dto';

@Injectable()
export class SliderService {
  constructor(
    @InjectModel('Slider')
    private readonly SliderModel: Model<Slider>,
  ) {}

  async getAllSlider(): Promise<Slider[]> {
    const sliders = await this.SliderModel.find().exec();
    return sliders;
  }
  async createSlider(createSliderDTO: CreateSliderDTO): Promise<Slider> {
    const newSlider = await new this.SliderModel(createSliderDTO);
    return newSlider.save();
  }

  async deleteSlider(id): Promise<any> {
    const data = await this.SliderModel.findByIdAndRemove(id);
    return data;
  }
}
