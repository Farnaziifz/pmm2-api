import { Module } from '@nestjs/common';
import { DiscoutController } from './discout.controller';
import { DiscoutService } from './discout.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DiscountSchema } from './discount.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Discount', schema: DiscountSchema }]),
  ],
  controllers: [DiscoutController],
  providers: [DiscoutService],
})
export class DiscoutModule {}
