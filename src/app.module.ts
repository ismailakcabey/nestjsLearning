import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesGuard } from './users/roles.guard';
import { UserController } from './users/user.controller';
import { UserModule } from './users/user.module';
import { UserService } from './users/user.service';
@Module({
  imports: [UserModule],
  controllers: [
    AppController ,
     UserController],
  providers: [
    AppService ,
     UserService,
    {
      provide : APP_GUARD,
      useClass : RolesGuard
    }],
})
export class AppModule {}
