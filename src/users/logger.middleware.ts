import { Injectable , NestMiddleware } from "@nestjs/common";
import { Request , Response } from "express";
import { request } from "http";
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req : Request , res : Response , next:()=>void){
        console.log(req.ip+"req geldi")
        console.log(res+"res geldi")
        if(req.ip === "::1")
        {
            console.log(req.ip+"geldi ::1");
            next();
        }
        else{
            console.log(req.ip+"geldi !::1");
        }
        
    }
}