import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from '../shared/user.service';
import { LoginDTO, RegisterDTO } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  tempAuth() {
    console.log('salalm');
    return { auth: 'works' };
  }

  @Post('login')
  async login(@Body() userDTO: LoginDTO) {
    console.log('login');
    const user = await this.userService.findByLogin(userDTO);
    const payload = {
      username: user.username,
    };
    const token = await this.authService.signPayload(payload);
    return { user, token };
  }

  @Post('register')
  async register(@Body() userDTO: RegisterDTO) {
    const user = await this.userService.create(userDTO);
    const payload = {
      username: user.username,
    };
    const token = await this.authService.signPayload(payload);
    return { user, token };
  }
}
