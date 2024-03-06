import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  getUsers() {
    return 'All users';
  }
}
