import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactFormSchema } from './form.model';
import { FormService } from './form.service';
import { FormController } from './form.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ContactForm', schema: ContactFormSchema },
    ]),
  ],
  providers: [FormService],
  controllers: [FormController],
})
export class FormModule {}
