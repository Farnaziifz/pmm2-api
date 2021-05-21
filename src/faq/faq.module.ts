import { Module } from '@nestjs/common';
import { FaqService } from './faq.service';
import { FaqController } from './faq.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FaqSchema } from './faq.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Faq', schema: FaqSchema }])],
  providers: [FaqService],
  controllers: [FaqController],
})
export class FaqModule {}
