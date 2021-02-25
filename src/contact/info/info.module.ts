import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactInfoSchema } from './info.model';
import { InfoController } from './info.controller';
import { InfoService } from './info.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ContactInfo', schema: ContactInfoSchema },
    ]),
  ],
  controllers: [InfoController],
  providers: [InfoService],
})
export class InfoModule {}
