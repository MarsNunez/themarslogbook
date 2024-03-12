import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class User {
  @Prop({
    required: true,
    trim: true,
  })
  username: string;

  @Prop({
    required: true,
    trim: true,
  })
  password: string;

  @Prop({
    default:
      'https://pbs.twimg.com/profile_images/1591129219140026368/z-InBgfw_400x400.jpg',
    trim: true,
  })
  image?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
