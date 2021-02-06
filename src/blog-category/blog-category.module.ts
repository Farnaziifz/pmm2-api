import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogCatSchema } from './blog-category.model';
import { BlogCategoryService } from './blog-category.service';
import { BlogCategoryController } from './blog-category.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'BlogCategory', schema: BlogCatSchema },
    ]),
  ],
  controllers: [BlogCategoryController, BlogCategoryController],
  providers: [BlogCategoryService],
})
export class BlogCategoryModule {}
