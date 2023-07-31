import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AppModule } from 'src/app.module';
import { AuthDto } from 'src/auth/dto';
import { Tokens } from 'src/auth/types';
import * as request from 'supertest';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();

    prisma = app.get<PrismaService>(PrismaService);
    await prisma.cleanDatabase();
  });

  afterAll(async () => {
    app.close();
  });

  describe('Auth', () => {
    const dto: AuthDto = {
      email: 'test@test.com',
      password: 'password',
    };

    let tokens: Tokens;

    it('Should Signup', () => {
      return request(app.getHttpServer())
        .post('/auth/local/signup')
        .send(dto)
        .expect(201)
        .expect(({ body }: { body: Tokens }) => {
          expect(body.access_token).toBeTruthy();
          expect(body.refresh_token).toBeTruthy();
        });
    });
  });
});
