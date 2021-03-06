import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-openid';
import { User } from '../../user/entity/user.entity';
import { AuthService } from '../auth.service';

@Injectable()
export class OpenidStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      providerURL: 'https://steamcommunity.com/openid',
      returnURL: `${process.env.BASE_URL}/api/auth/login`,
      realm: process.env.BASE_URL,
      stateless: true,
    });
  }

  private static getSteamIdFromIdentifier(identifier: string): string {
    const identifierRegex = /^https?:\/\/steamcommunity\.com\/openid\/id\/(\d+)$/;
    return identifierRegex.exec(identifier)[1];
  }

  async validate(identifier: string): Promise<User> {
    const steamId = OpenidStrategy.getSteamIdFromIdentifier(identifier);
    return await this.authService.validateUser(steamId);
  }
}
