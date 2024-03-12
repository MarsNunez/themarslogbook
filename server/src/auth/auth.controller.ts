import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO, FindUserDTO } from './dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Get()
  getUsers() {
    return this.authService.getUsers();
  }

  @Post('/create')
  createUser(@Body() newUser: CreateUserDTO) {
    return this.authService.createUser(newUser);
  }

  @Post('/login')
  loginUser(@Body() userToFind: FindUserDTO) {
    return this.authService.loginUser(userToFind.username, userToFind.password);
  }
}
