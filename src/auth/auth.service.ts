import { Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { UserService } from 'src/shared/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(payload: any) {
    console.log(payload);
    return await this.userService.findByPayload(payload);
  }

  async signPayload(payload: any) {
    return sign(payload, 'secretKey', { expiresIn: '365d' });
  }
}
