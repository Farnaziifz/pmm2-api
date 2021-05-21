import { Module } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamsSchema } from './teams.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Teams', schema: TeamsSchema }]),
  ],
  providers: [TeamsService],
  controllers: [TeamsController],
})
export class TeamsModule {}
