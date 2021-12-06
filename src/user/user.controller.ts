import {
  Controller,
  Get,
  Res,
  HttpStatus,
  UseGuards,
  Param,
  NotFoundException,
  Delete,
  Put,
  Body,
} from '@nestjs/common';
import { UserService } from '../shared/user.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDTO } from './dto/create-user.dto';

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
  @Get('/:id')
  async getUser(@Res() res, @Param('id') id) {
    const data = await this.userService.getUserById(id);
    if (!data) throw new NotFoundException('user does not exist!');
    return res.status(HttpStatus.OK).json({ data, statusCode: 200 });
  }
  @Put('/update/:id')
  async updateProduct(
    @Res() res,
    @Param('id') id,
    @Body() createUserDTO: CreateUserDTO,
  ) {
    const data = await this.userService.updateUser(id, createUserDTO);
    if (!data) throw new NotFoundException('data does not exist!');
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'data has been successfully updated',
      data,
    });
  }
}
