import Image from 'next/legacy/image';
import { fonts } from '@/app/utils/fonts';

interface ReviewCardProps {
  username: string;
  comment: string;
  stars: string;
  image: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  username,
  comment,
  stars,
  image,
}) => {
  const starRating = parseFloat(stars);
  const fullStars = Math.floor(starRating);
  const hasHalfStar = starRating - fullStars >= 0.5;

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Image
            src={image}
            alt={username}
            width={48}
            height={48}
            className="rounded-full mr-4"
          />
          <h3 className={`font-bold ${fonts.inter}`}>{username}</h3>
        </div>
        <div className="flex items-center">
          {[...Array(fullStars)].map((_, i) => (
            <span key={i} className="text-yellow-400">
              &#9733;
            </span>
          ))}
          {hasHalfStar && <span className="text-yellow-400">&#9734;</span>}
          {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
            <span key={i} className="text-gray-300">
              &#9733;
            </span>
          ))}
        </div>
      </div>
      <p className={`text-gray-700 ${fonts.inter}`}>{comment}</p>
    </div>
  );
};

export default ReviewCard;
