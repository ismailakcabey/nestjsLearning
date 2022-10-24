import { Body, Controller, Delete, Get , Param, Post, Put, Query, Patch , Req, Res, UseGuards } from '@nestjs/common';
import { json } from 'stream/consumers';
import { AppService } from '../app.service';
import {parse, stringify, toJSON, fromJSON} from 'flatted';
import { query, Request , Response} from 'express';
import { request } from 'http';
import { UserService } from './user.service';
import { UserModule } from './user.module';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decoartor'
@Controller('user')
// @UseGuards(RolesGuard)
export class UserController {
    constructor(private userservice : UserService) { }
    
    @Get('/middleware')
    getMiddle(){
        
        return "kullaniciler";
    }

    @Get('/modules')
    getArray():Promise<Array<number>>{
        return this.userservice.getUsers();
    }

    @Get('/users')
    getUsers(): string {
        return "users";
    }

    // @Get(':id')
    // findByIdUser(@Param()params):string {
    //     console.log(params.id);
    //     return `${params.id} id li user geldi`;
    // }

    @Get('/query')
    findByQueryUser(@Query('ad') query , @Query('q')q):string {
        console.log(query+q+" query");
        return query+q;
    }

    @Get('/wild|wildcrd')
    wildCard():string {
        return "card";
    }

    @Post("/postuser")
    createUser(@Body() data: {id:string , name: string , number : number}) : any{
        return data;
    }

    @Delete('/deleteuser')
    deleteUser(@Body() data: {id:string}):any{
        return data + "silindi";
    }

    @Put('updateuser')
    findByIdAndUpdateUser(@Body() data: {id:string}):any{
        return data + "guncellendi";
    }

    @Patch('patchuser')
    findByIdAndPatchUser(@Body() data: {id:string}):any{
        return data + "patchuser";
    }
}