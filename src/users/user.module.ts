import {MiddlewareConsumer, Module, NestModule , RequestMethod} from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { LoggerMiddleware } from './logger.middleware';
import { consumers } from 'stream';
import { RolesGuard } from './roles.guard';
@Module({
    controllers:[UserController ],
    providers:[UserService , LoggerMiddleware ],
})
export class UserModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes(UserController , AppController);
    }
    //configure(consumer : MiddlewareConsumer){
    //    path:'user',
    //    method:RequestMethod.GET;
    //}
}