import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDTO, EditPostDTO } from './dto/post.dto';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  getPosts() {
    return this.postsService.getPosts();
  }

  @Get(':id')
  findPost(@Param('id') id: string) {
    return this.postsService.findPost(id);
  }

  @Post()
  createPost(@Body() newPost: CreatePostDTO) {
    return this.postsService.createPost(newPost);
  }

  @Put(':id')
  editPost(@Param('id') id: string, @Body() fieldsToUpdate: EditPostDTO) {
    return this.postsService.editPost(id, fieldsToUpdate);
  }

  @Delete(':id')
  deletePost(@Param('id') id: string) {
    return this.postsService.deletePost(id);
  }
}
