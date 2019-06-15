import { IsBoolean, IsString } from 'class-validator';

class BotUpdateDto {
  @IsString()
  name: string;

  @IsString()
  login: string;

  @IsString()
  tradeLink: string;

  @IsBoolean()
  is2FA: boolean;

  @IsBoolean()
  isOnline: boolean;
}

export default BotUpdateDto;
