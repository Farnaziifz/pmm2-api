import {
  Body,
  Controller,
  Get,
  Post,
  Res,
  HttpStatus,
  Param,
  Delete,
} from '@nestjs/common';
import { SliderService } from './slider.service';
import { CreateSliderDTO } from '../dto/create-slider.dto';

@Controller('slider')
export class SliderController {
  constructor(private sliderService: SliderService) {}

  @Get()
  async getAllSliders(@Res() res) {
    const sliders = await this.sliderService.getAllSlider();
    return res.status(HttpStatus.OK).json({ sliders, statusCode: 200 });
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

  @Delete('/delete/:id')
  async deleteSlider(@Res() res, @Param('id') id) {
    const data = await this.sliderService.deleteSlider(id);
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'slider delete succefuly',
      data,
    });
  }
}
