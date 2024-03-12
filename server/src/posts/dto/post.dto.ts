import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePostDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @IsArray()
  topics: string[];

  @IsString()
  @IsOptional()
  thumbnail: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsOptional()
  videoLink: string;

  @IsString()
  @IsNotEmpty()
  user: string;
}

export class EditPostDTO {
  @IsString()
  @IsOptional()
  title: string;

  @IsArray()
  @IsOptional()
  topics: string[];

  @IsString()
  @IsOptional()
  thumbnail: string;

  @IsString()
  @IsOptional()
  content: string;

  @IsString()
  @IsOptional()
  videoLink: string;
}
