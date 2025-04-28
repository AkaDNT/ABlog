import { Module } from '@nestjs/common';
import { PostService } from './post.service';

import { PrismaService } from 'src/prisma/prisma.service';
import { PostsResolver } from './post.resolver';

@Module({
  providers: [PostService, PrismaService, PostsResolver],
})
export class PostModule {}
