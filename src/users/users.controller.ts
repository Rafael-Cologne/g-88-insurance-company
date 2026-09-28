import { Body, Controller, Post } from '@nestjs/common';
import { User } from './user.entity.js';

// http://10.20.30.40:3001/users
@Controller('users')
export class UsersController {
  // POST -> http://10.20.30.40:3001/users
  @Post()
  create(@Body() user: User): User {
    // Здесь будет обращение к сервису,
    // но пока пишем здесь тренировочный код, который
    // позволит нам протестировать контроллер в реальном времени
    console.log('Saved user:', user);
    user.id = 7;
    return user;
  }
}
