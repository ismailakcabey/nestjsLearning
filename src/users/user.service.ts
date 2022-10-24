import { Injectable } from "@nestjs/common";

@Injectable({})
export class UserService{

getUsers():Promise<Array<number>>{
    return new Promise<Array<number>>((resolve, reject) => {
        setTimeout(() =>{
            resolve ([1,2,3,4,5,6,7,8,9,10,11]);
        },300)
    })
    
}

}