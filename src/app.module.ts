import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';
import { BlogCategoryModule } from './blog-category/blog-category.module';

@Module({
  imports: [
    BlogModule,
    MongooseModule.forRoot('mongodb://localhost/mokamel_db', {
      useFindAndModify: false,
    }),
    BlogCategoryModule,
  ],
})
export class AppModule {}
