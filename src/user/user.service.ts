import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private readonly userRepository: Repository<User>,
      ) {}

    async getUser(id){
        return await this.userRepository.find({'id':id})
    }

    async getAllUser() : Promise<User[]>{
        return await this.userRepository.find();
    }

    async addUser(user){
        let res = await this.userRepository.create(user)
        this.userRepository.save(res)
        return res
    }

    async updateUser(id,user){
        let res =  await this.userRepository.find({'id':id})
        res[0].name = user.name
        res[0].description = user.description
        res[0].filename = user.filename
        res[0].views = user.views
        res[0].isPublished = user.isPublished
        return this.userRepository.save(res)
    }

    async deleteUser(id){
        let res =  await this.userRepository.find({'id':id})
        return this.userRepository.remove(res)
    }
}
