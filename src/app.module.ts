import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
     UserService],
})
export class AppModule {}
