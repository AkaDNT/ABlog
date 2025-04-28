// src/posts/posts.resolver.ts
import { Resolver, Query } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './entities/post.entity';

@Resolver()
export class PostsResolver {
  constructor(private readonly postService: PostService) {}
  @Query(() => [Post], { name: 'post' })
  async findAll() {
    return await this.postService.findAll();
  }
}
