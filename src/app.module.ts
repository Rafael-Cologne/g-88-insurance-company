import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller.js';

@Module({
  controllers: [UsersController]
})
export class AppModule {}
