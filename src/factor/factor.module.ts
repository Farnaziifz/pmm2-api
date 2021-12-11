import { Module } from '@nestjs/common';
import { FactorService } from './factor.service';

@Module({
  providers: [FactorService]
})
export class FactorModule {}
