import { Controller, Get, Res, HttpStatus, UseGuards } from '@nestjs/common';
import { UserService } from '../shared/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}


  @Get()
  async getAllUsers(@Res() res) {
    const data = await this.userService.getAllUser();
    return res.status(HttpStatus.OK).json({ data, statusCode: 200 });
  }
}
