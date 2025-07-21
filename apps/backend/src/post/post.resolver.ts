// src/posts/posts.resolver.ts
import { Resolver, Query } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './entities/post.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth/jwt-auth.guard';

@Resolver()
export class PostsResolver {
  constructor(private readonly postService: PostService) {}
  @Query(() => [Post], { name: 'post' })
  @UseGuards(JwtAuthGuard)
  async findAll() {
    return await this.postService.findAll();
  }
}
