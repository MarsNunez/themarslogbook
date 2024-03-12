import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';
import { CreateUserDTO } from './dto/user.dto';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  getUsers() {
    return this.userModel.find();
  }

  createUser(newUser: CreateUserDTO) {
    return this.userModel.create(newUser);
  }

  loginUser(username: string, password: string) {
    const user = this.userModel.findOne({ username, password });
    if (!user) return 'User or password are incorrect.';
    return user;
  }
}
