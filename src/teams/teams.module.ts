import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';
import { TeamsSchema } from './teams.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Team', schema: TeamsSchema }])],
  controllers: [TeamsController],
  providers: [TeamsService],
})
export class TeamsModule {}
