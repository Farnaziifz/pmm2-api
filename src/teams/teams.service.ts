import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Teams } from './teams.interface';
import { CreateTeamsDTO } from './dto/create-team.dto';

@Injectable()
export class TeamsService {
  constructor(@InjectModel('Teams') private readonly teamModel: Model<Teams>) {}

  async getAllTeams(): Promise<Teams[]> {
    const teams = await this.teamModel.find().exec();
    return teams;
  }

  async getTeamById(id): Promise<Teams> {
    const team = await this.teamModel.findById(id).exec();
    return team;
  }

  async createTeam(createTeamsDTO: CreateTeamsDTO): Promise<Teams> {
    const newTeam = await new this.teamModel(createTeamsDTO);

    return newTeam.save();
  }

  async updateTeam(teamID, createTeamDTO: CreateTeamsDTO): Promise<Teams> {
    const updateTeam = await this.teamModel.findByIdAndUpdate(
      teamID,
      createTeamDTO,
      { new: true },
    );

    return updateTeam;
  }

  async deleteTeam(teamID): Promise<any> {
    const deleteTeam = await this.teamModel.findByIdAndRemove(teamID);
    return deleteTeam;
  }
}
