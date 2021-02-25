import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ContactForm } from './form.interface';
import { CreateContactFormDTO } from '../dto/create-contact-form';

@Injectable()
export class FormService {
  constructor(
    @InjectModel('ContactForm')
    private readonly contactFormModel: Model<ContactForm>,
  ) {}

  async getAllContactForm(): Promise<ContactForm[]> {
    const contactForm = await this.contactFormModel.find().exec();
    return contactForm;
  }

  async createContactForm(
    createContactFormDTO: CreateContactFormDTO,
  ): Promise<ContactForm> {
    const newContactForm = await new this.contactFormModel(
      createContactFormDTO,
    );
    return newContactForm.save();
  }
  async getFormById(id): Promise<ContactForm> {
    const contactForm = await this.contactFormModel.findById(id).exec();
    return contactForm;
  }
}
