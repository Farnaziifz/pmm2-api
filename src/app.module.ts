import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';
import { BlogCategoryModule } from './blog-category/blog-category.module';
import { BlogTagModule } from './blog-tags/blog-tag.module';

@Module({
  imports: [
    BlogModule,
    MongooseModule.forRoot('mongodb://localhost/mokamel_db', {
      useFindAndModify: false,
    }),
    BlogCategoryModule,
    BlogTagModule,
  ],
  // providers: [BlogTagsService],
  // providers: [BlogCategoryService],
})
export class AppModule {}
