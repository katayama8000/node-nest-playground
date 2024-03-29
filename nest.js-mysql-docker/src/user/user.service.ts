import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/user/dto/createUser.dto';
import { Repository } from 'typeorm';
import { User as UserEntity } from '../typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async getAllUsers(): Promise<UserEntity[]> {
    const users = await this.userRepository.find();
    if (users.length === 0) throw new Error('No users found');
    return users;
  }

  async getUsersByUsername(username: string): Promise<UserEntity[]> {
    return await this.userRepository.find({
      where: { username: username },
    });
  }

  async getUserById(id: number): Promise<UserEntity[]> {
    return await this.userRepository.find({ where: { id: id } });
  }

  createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    console.log('createUserDto: ', createUserDto);
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }
}
