import { Module } from '@nestjs/common';
import { PreFactorController } from './pre-factor.controller';
import { PreFactorService } from './pre-factor.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PreFactorSchema } from './pre-factor.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'PreFactor', schema: PreFactorSchema }]),
  ],
  controllers: [PreFactorController],
  providers: [PreFactorService]
})
export class PreFactorModule {}
