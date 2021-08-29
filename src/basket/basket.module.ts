import { Module } from '@nestjs/common';
import { BasketService } from './basket.service';
import { BasketController } from './basket.controller';
import { BasketSchema } from './basket.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Basket', schema: BasketSchema }]),
  ],
  providers: [BasketService],
  controllers: [BasketController],
})
export class BasketModule {}
