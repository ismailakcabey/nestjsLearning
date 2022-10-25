import { NestFactory , Reflector} from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction , Request , Response } from 'express';
import { RolesGuard } from './users/roles.guard';
export function logger(req:Request , res:Response , next:NextFunction){
  console.log(res+"gelen res global");
  next();
}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(logger);
  //app.useGlobalGuards(new RolesGuard(new Reflector()));
  await app.listen(3000);
}
bootstrap();
