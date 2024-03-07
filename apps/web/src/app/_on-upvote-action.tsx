'use server';

import { PrismaClient } from '@prisma/client';
import { ReviewRepository } from '@/data-access/review/review.repository';
import { ReviewUseCase } from '@/data-access/review/review.use-case';

const prisma = new PrismaClient();

const reviewRepository = new ReviewRepository(prisma);

const reviewUseCase = new ReviewUseCase(reviewRepository);

export async function onUpvoteAction() {
  console.log('asd');

  //todo check for user id
  const userId = '1';

  await reviewUseCase.upvoteReview('1', userId);
}
