import { Controller, Get, Req, Post, Body, Param, Query, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags, ApiParam, ApiQuery } from '@nestjs/swagger';
import { userDto } from './dto/user.dyo';
import { userProviders } from './user.providers';

@ApiTags('用户列表')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Get()
    getAllUser() {
        return this.userService.getAllUser();
    }

    @Get(':id')
    getOneUser(@Param('id') id:string) {
        return this.userService.getUser(id)
    }

    @Post()
    addUser(@Body() user: userDto) {
        return this.userService.addUser(user)
    }

    @Put(':id')
    updateUser(@Param('id') id:string, @Body() user: userDto) {
        return this.userService.updateUser(id, user)
    }

    @Delete(':id')
    deletaUser(@Param('id') id:string) {
        return this.userService.deleteUser(id)
    }

    @Get('/all')
    @ApiQuery({ name: 'role', description: '这是需要传递的参数', })
    @ApiQuery({ name: 'name', description: '这是需要传递的参数', })
    unRestful(@Query() query: string) {
        console.log(query)
    }


}
