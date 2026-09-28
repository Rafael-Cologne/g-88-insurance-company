import { Module } from '@nestjs/common';
import { UserController } from './users/users.controller.js';

@Module({
  controllers: [UserController]
})
export class AppModule {}
