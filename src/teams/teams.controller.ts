import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Res,
  HttpStatus,
  NotFoundException,
  Put,
} from '@nestjs/common';

import { TeamsService } from './teams.service';
import { CreateTeamsDTO } from './dto/create-team.dto';

@Controller('teams')
export class TeamsController {
  constructor(private teamsService: TeamsService) {}

  @Get()
  async getAllTeams(@Res() res) {
    const teams = await this.teamsService.getAllTeams();
    return res.status(HttpStatus.OK).json(teams);
  }

  @Post('create')
  async createTeam(@Res() res, @Body() createTeamsDTO: CreateTeamsDTO) {
    const team = await this.teamsService.createTeam(createTeamsDTO);

    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'Team added succefuly',
      team,
    });
  }

  @Get('/:id')
  async getTeam(@Res() res, @Param('id') id) {
    const team = await this.teamsService.getTeamById(id);
    if (!team) throw new NotFoundException('Team does not exist!');
    return res.status(HttpStatus.OK).json(team);
  }

  @Put('/update/:id')
  async updateTeam(
    @Res() res,
    @Param('id') id,
    @Body() createTeamsDTO: CreateTeamsDTO,
  ) {
    const team = await this.teamsService.updateTeam(id, createTeamsDTO);
    if (!team) throw new NotFoundException('Team does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'team has been successfully updated',
      team,
    });
  }

  @Delete('/delete/:id')
  async deleteTeam(@Res() res, @Param('id') id) {
    const team = await this.teamsService.deleteTeam(id);
    if (!team) throw new NotFoundException('Team does not exist');
    return res.status(HttpStatus.OK).json({
      message: 'Team has been deleted',
      team,
    });
  }
}
