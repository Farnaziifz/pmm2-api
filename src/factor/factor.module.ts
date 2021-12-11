import { Module } from '@nestjs/common';
import { FactorService } from './factor.service';
import { FactorController } from './factor.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FactorSchema } from './factor.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Factor', schema: FactorSchema }]),
  ],
  controllers: [FactorController],
  providers: [FactorService],
})
export class FactorModule {}
