import { IReviewRepository } from '@/data-access/review/review.repository';
import { Review, VoteType } from '@prisma/client';

export class ReviewUseCase {
  constructor(private reviewRepository: IReviewRepository) {}

  async createReview(review: Review): Promise<Review> {
    await this.reviewRepository.validateReview(review);

    return this.reviewRepository.create(review);
  }

  async updateReview(review: Review): Promise<Review> {
    await this.reviewRepository.validateReview(review);

    return this.reviewRepository.updateReview(review);
  }

  async getReviewById(findId: string): Promise<Review> {
    return this.reviewRepository.getReviewById(findId);
  }

  async getAllReviews(): Promise<Review[]> {
    return this.reviewRepository.findAll();
  }

  async upvoteReview(reviewId: string, userId: string): Promise<void> {
    await this.reviewRepository.checkExistingVote(userId, reviewId, VoteType.UPVOTE);

    return this.reviewRepository.upvoteReview(reviewId);
  }

  async downvoteReview(reviewId: string, userId: string): Promise<void> {
    await this.reviewRepository.checkExistingVote(userId, reviewId, VoteType.DOWNVOTE);

    return this.reviewRepository.downvoteReview(reviewId);
  }

  async deleteReview(reviewId: string): Promise<void> {
    return this.reviewRepository.deleteReview(reviewId);
  }
}
