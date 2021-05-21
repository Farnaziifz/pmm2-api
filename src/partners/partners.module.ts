import { Module } from '@nestjs/common';
import { PartnersController } from './partners.controller';
import { PartnersSchema } from './partners.schema';
import { PartnersService } from './partners.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Partners', schema: PartnersSchema }]),
  ],
  controllers: [PartnersController],
  providers: [PartnersService],
})
export class PartnersModule {}
