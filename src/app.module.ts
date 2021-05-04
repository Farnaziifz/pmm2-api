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

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI, {
      useFindAndModify: false,
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
  ],
})
export class AppModule {}
