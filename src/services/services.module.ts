import { Module } from '@nestjs/common';
import { ServicesController } from './services.controller';
import { ServicesService } from './services.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ServicesSchema } from './service.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Services', schema: ServicesSchema }]),
  ],
  controllers: [ServicesController],
  providers: [ServicesService],
})
export class ServicesModule {}
