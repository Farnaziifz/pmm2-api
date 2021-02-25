import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SpecSchema } from './spec.model';
import { SpecService } from './spec.service';
import { SpecController } from './spec.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Spec', schema: SpecSchema }])],
  providers: [SpecService],
  controllers: [SpecController],
})
export class SpecModule {}
