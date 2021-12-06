import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogCategoryModule } from './blog-category/blog-category.module';
import { BlogTagModule } from './blog-tags/blog-tag.module';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { ProductCategoryModule } from './product-category/product-category.module';
import { BrandsModule } from './brands/brands.module';
import { SliderModule } from './main/slider/slider.module';
import { SpecModule } from './main/spec/spec.module';
import { FormModule } from './contact/form/form.module';
import { InfoModule } from './contact/info/info.module';
import { ProductModule } from './product/product.module';
import { BlogModule } from './blog/blog.module';
import { BlogCommentModule } from './blog-comment/blog-comment.module';
import { MulterModule } from '@nestjs/platform-express';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CertsModule } from './certs/certs.module';
import { ProductCommentModule } from './product-comment/product-comment.module';
import { ServicesModule } from './services/services.module';
import { TeamsModule } from './teams/teams.module';
import { PartnersModule } from './partners/partners.module';
import { FaqModule } from './faq/faq.module';
import { BasketModule } from './basket/basket.module';
import { PaymentModule } from './payment/payment.module';
import { OrderModule } from './order/order.module';
import { AddressModule } from './address/address.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI, {
      useFindAndModify: false,
    }),
    MulterModule.register({
      dest: './uploads',
    }),
    BlogCategoryModule,
    BlogTagModule,
    UserModule,
    SharedModule,
    AuthModule,
    ProductCategoryModule,
    BrandsModule,
    SliderModule,
    SpecModule,
    FormModule,
    InfoModule,
    ProductModule,
    BlogModule,
    BlogCommentModule,
    CertsModule,
    ProductCommentModule,
    ServicesModule,
    TeamsModule,
    PartnersModule,
    FaqModule,
    BasketModule,
    PaymentModule,
    OrderModule,
    AddressModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
