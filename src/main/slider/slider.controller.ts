import { Body, Controller, Get, Post, Res, HttpStatus } from '@nestjs/common';
import { SliderService } from './slider.service';
import { CreateSliderDTO } from '../dto/create-slider.dto';

@Controller('slider')
export class SliderController {
  constructor(private sliderService: SliderService) {}

  @Get()
  async getAllSliders(@Res() res) {
    const sliders = await this.sliderService.getAllSlider();
    return res.status(HttpStatus.OK).json(sliders);
  }

  @Post('create')
  async createBrand(@Res() res, @Body() createSliderDTO: CreateSliderDTO) {
    const slider = await this.sliderService.createSlider(createSliderDTO);
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'slider added succefuly',
      slider,
    });
  }
}
