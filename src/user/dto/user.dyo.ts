import { ApiProperty } from "@nestjs/swagger";

export class userDto {
    readonly id :number
    
    @ApiProperty({'description':'用户姓名'})
    readonly name: string;

    @ApiProperty({'description':'用户描述'})
    readonly description: string;

    @ApiProperty({'description':'文件姓名'})
    readonly filename: string;

    @ApiProperty({'description':'阅览'})
    readonly views: number;

    @ApiProperty({'description':'出版'})
    readonly isPublished: boolean;
}