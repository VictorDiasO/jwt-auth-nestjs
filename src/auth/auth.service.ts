import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  localSignup(dto: AuthDto) {
    // const newUser = this.prisma.user.create({
    //   data: {
    //     email: dto.email,
    //   }
    // });
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
