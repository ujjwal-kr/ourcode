import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { Postservice } from './post.service';
import { CreatePostDTO, UpdatePostDto } from './dto/post.dto';
import { User } from '@prisma/client';

@Controller('post')
export class Postcontroller {
  constructor(private readonly postService: Postservice) {}

  @Post()
  create(@Body() createPostDto: CreatePostDTO) {
    return this.postService.create(createPostDto);
  }

  @Get()
  findAll(@Query() page?: string) {
    return this.postService.findAll(+page);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Body() user: User) {
    return this.postService.remove(id, user);
  }
}
