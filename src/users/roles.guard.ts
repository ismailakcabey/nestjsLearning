import { CanActivate , ExecutionContext , Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { request } from "http";
import { Observable } from "rxjs";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    console.log(context.getHandler())
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    const request = context.switchToHttp().getRequest();
    const header = request.header('userRole');
    console.log(request)
    console.log(header+"a")
    console.log(roles + " roles")
    if(header == "admin") return true;
    return false;
  }
} 