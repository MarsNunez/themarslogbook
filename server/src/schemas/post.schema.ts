import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from './user.schema';

@Schema({
  timestamps: true,
})
export class Post {
  @Prop({
    required: true,
    trim: true,
  })
  title: string;

  @Prop([String])
  topics: string[];

  @Prop({
    default:
      'https://paa.vn/wp-content/uploads/2019/01/myanmar-bagan-sunrise-over-the-pagodas-and-balloon.jpg',
    trim: true,
  })
  thumbnail: string;

  @Prop({
    required: true,
    trim: true,
  })
  content: string;

  @Prop({
    trim: true,
  })
  videoLink: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const PostSchema = SchemaFactory.createForClass(Post);
