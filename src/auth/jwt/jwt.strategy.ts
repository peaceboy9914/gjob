import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from '../../user/user.service'; // Adjust the import path
import { User } from '../../user/Schema/user.schema'; // Adjust the import path

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET, // Use your JWT secret
    });
  }

  async validate(payload: any): Promise<User> {
    return this.userService.findByEmail(payload.email);
  }
}