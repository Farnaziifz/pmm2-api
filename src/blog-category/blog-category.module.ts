import { Module } from '@nestjs/common';
import { BlogCategoryService } from './blog-category.service';

@Module({
  providers: [BlogCategoryService]
})
export class BlogCategoryModule {}
