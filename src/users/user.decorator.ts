import { createParamDecorator, ExecutionContext } from "@nestjs/common"

export const UserDecorator = createParamDecorator(
    (data:any , ctx : ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest()
        console.log(request.query)
        return request.query[data]
    }
)

export const postDecorator = createParamDecorator(
    (data:any , ctx : ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest()
        console.log(request.query)
        return request.body[data]
    }
)