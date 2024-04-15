import Image from 'next/legacy/image';
import { fonts } from '@/app/utils/fonts';
import ReviewCard from './ReviewCard';

const reviews = [
  {
    username: 'Floyd Miles',
    comment:
      'I absolutely love this jacket! The quality is outstanding, and it fits like a dream. The attention to detail is evident in every stitch, and I know this will be a staple in my wardrobe for years to come.',
    stars: '4.5',
    image: '/feedback/review-3.jpg',
  },
  {
    username: 'Ronald Richards',
    comment:
      "These jeans are okay, but not quite what I was expecting. The fit is a bit off, and the material feels thinner than I'd like. They're still wearable, but I don't think they'll be my go-to pair.",
    stars: '3.5',
    image: '/feedback/review-1.jpg',
  },
  {
    username: 'Savannah Nguyen',
    comment:
      "I'm extremely disappointed with this t-shirt. After just one wash, it's already falling apart at the seams. The fabric is scratchy and uncomfortable, and the color is nothing like what was advertised. I wouldn't recommend this to anyone.",
    stars: '2.5',
    image: '/feedback/review-2.jpg',
  },
];

const Feedback = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {reviews.map((review, index) => (
        <ReviewCard
          key={index}
          username={review.username}
          comment={review.comment}
          stars={review.stars}
          image={review.image}
        />
      ))}
    </div>
  );
};

export default Feedback;
