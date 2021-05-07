import {
  Controller,
  Get,
  Res,
  HttpStatus,
  UseGuards,
  Param,
  NotFoundException,
  Delete,
} from '@nestjs/common';
import { UserService } from '../shared/user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAllUsers(@Res() res) {
    const data = await this.userService.getAllUser();
    return res.status(HttpStatus.OK).json({ data, statusCode: 200 });
  }

  @Delete('/delete/:id')
  @UseGuards(AuthGuard('jwt'))
  async deleteCat(@Res() res, @Param('id') id) {
    const user = await this.userService.deleteUser(id);
    if (!user) throw new NotFoundException('user does not exist');
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'user has been deleted',
      user,
    });
  }
}
