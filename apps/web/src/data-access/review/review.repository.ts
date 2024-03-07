import 'server-only';

import { PrismaClient, Review, VoteType } from '@prisma/client';
import { z } from 'zod';

export interface IReviewRepository {
  create(review: Review): Promise<Review>;
  findAll(): Promise<Review[]>;
  getReviewById(findId: string): Promise<Review>;
  updateReview(review: Review): Promise<Review>;
  validateReview(review: Review): Promise<void>;
  upvoteReview(reviewId: string): Promise<void>;
  downvoteReview(reviewId: string): Promise<void>;
  deleteReview(reviewId: string): Promise<void>;
  checkExistingVote(userId: string, reviewId: string, voteType: VoteType): Promise<void>;
}

const schema = z.object({
  rating: z.number().min(1).max(5),
  title: z.string().min(1).max(100),
  description: z.string().optional(),
});

export class ReviewRepository implements IReviewRepository {
  constructor(private prisma: PrismaClient) {}

  async create(review: Review): Promise<Review> {
    return this.prisma.review.create({
      data: {
        rating: review.rating,
        title: review.title,
        description: review.description,
      },
    });
  }

  async findAll(): Promise<Review[]> {
    return this.prisma.review.findMany({
      where: {
        isDeleted: false,
      },
    });
  }

  async getReviewById(id: string): Promise<Review> {
    const review = await this.prisma.review.findUnique({
      where: {
        id,
        isDeleted: false,
      },
    });

    if (!review) {
      throw new Error('Review not found');
    }

    return review;
  }

  async updateReview(review: Review): Promise<Review> {
    return this.prisma.review.update({
      where: {
        id: review.id,
      },
      data: {
        rating: review.rating,
        title: review.title,
        description: review.description,
      },
    });
  }

  async validateReview(review: Review): Promise<void> {
    try {
      schema.parse(review);
    } catch (error) {
      throw new Error('Invalid review');
    }
  }

  async checkExistingVote(userId: string, reviewId: string, voteType: VoteType) {
    const existingVote = await this.prisma.reviewVote.findFirst({
      where: {
        userId,
        reviewId,
      },
    });

    if (existingVote) {
      throw new Error('User already voted');
    }

    await this.prisma.reviewVote.create({
      data: {
        userId,
        reviewId,
        voteType,
      },
    });
  }

  async upvoteReview(reviewId: string): Promise<void> {
    await this.prisma.review.update({
      where: {
        id: reviewId,
      },
      data: {
        upvotes: {
          increment: 1,
        },
      },
    });
  }

  async downvoteReview(reviewId: string): Promise<void> {
    await this.prisma.review.update({
      where: {
        id: reviewId,
      },
      data: {
        downvotes: {
          increment: 1,
        },
      },
    });
  }

  async deleteReview(reviewId: string): Promise<void> {
    await this.prisma.review.update({
      where: {
        id: reviewId,
      },
      data: {
        isDeleted: true,
      },
    });
  }
}
