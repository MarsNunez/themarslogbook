import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from 'src/schemas/post.schema';
import { CreatePostDTO, EditPostDTO } from './dto/post.dto';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  getPosts() {
    return this.postModel.find();
  }

  createPost(newPost: CreatePostDTO) {
    return this.postModel.create(newPost);
  }

  findPost(id: string) {
    return this.postModel.findById(id);
  }

  editPost(id: string, fieldsToUpdate: EditPostDTO) {
    return this.postModel.findByIdAndUpdate(id, fieldsToUpdate);
  }

  deletePost(id: string) {
    return this.postModel.findByIdAndDelete(id);
  }
}
