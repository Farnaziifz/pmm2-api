import { Module } from '@nestjs/common';
import { CertsService } from './certs.service';
import { CertsController } from './certs.controller';
import { CertsSchema } from './certs.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Certs', schema: CertsSchema }]),
  ],
  providers: [CertsService],
  controllers: [CertsController],
})
export class CertsModule {}
