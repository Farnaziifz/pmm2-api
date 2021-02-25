import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BrandsSchema } from './brands.model';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Brands', schema: BrandsSchema }]),
  ],
  providers: [BrandsService],
  controllers: [BrandsController],
})
export class BrandsModule {}
