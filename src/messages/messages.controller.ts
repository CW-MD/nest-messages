import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages(){}

    @Post()
    createMessage(@Body() body: any){
        console.log(Object.values(body))
    }

    @Get("/:id")
    getMessage(@Param('id')  id: string){
        console.log(id)
    }
    
}
