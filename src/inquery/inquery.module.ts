import { Module } from '@nestjs/common';
import { InqueryController } from './inquery.controller';
import { InqueryService } from './inquery.service';
import { MongooseModule } from '@nestjs/mongoose';
import { InquerySchema } from './inquery.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Inquery', schema: InquerySchema }]),
  ],

  controllers: [InqueryController],
  providers: [InqueryService],
})
export class InqueryModule {}
