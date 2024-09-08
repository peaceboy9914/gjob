import { Body, Controller, Get, Param, Post, Put, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { GjobService } from './gjob.service';

@Controller('gjob')
export class GjobController {

    constructor(private GjobService: GjobService){}

    @Get('users')
    findAll() {
        return this.GjobService.findAll()
    }

    @Get('users/:id')
    findOne(@Param() params: any): string {
        console.log(params.id)
        return `This action returns users of id ${params.id}`
    }

    @Post('users')
    create(@Body() createUserDto: CreateUserDto) {
        return this.GjobService.create(createUserDto)
    }




    // @Delete('users/:id')
    // remove(@Param('id') id: string) {
    //     return this.GjobService.remove(id);
    // }
}




