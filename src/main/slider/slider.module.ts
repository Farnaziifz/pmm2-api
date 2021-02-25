import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SliderSchema } from './slider.model';
import { SliderService } from './slider.service';
import { SliderController } from './slider.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Slider', schema: SliderSchema }]),
  ],
  providers: [SliderService],
  controllers: [SliderController],
})
export class SliderModule {}
