import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './posts/posts.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot(
      'mongodb+srv://root:root@themarslogbook.krer4sg.mongodb.net/TheMarsLogbook?retryWrites=true&w=majority&appName=TheMarsLogbook',
    ),
    PostsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
