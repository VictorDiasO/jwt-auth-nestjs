import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  private hashData(data: string) {
    return bcrypt.hash(data, Number(process.env.HASH_SALT_ROUNDS));
  }

  async localSignup(dto: AuthDto) {
    const hash = await this.hashData(dto.password);

    const newUser = await this.prisma.user.create({
      data: {
        email: dto.email,
        hash,
      },
    });
  }

  localSignin() {
    throw new Error('Method not implemented yet');
  }

  logout() {
    throw new Error('Method not implemented yet');
  }

  refreshTokens() {
    throw new Error('Method not implemented yet');
  }
}
