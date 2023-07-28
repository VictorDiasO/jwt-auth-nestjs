import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  localSignup() {
    throw new Error('Method not implemented yet');
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
