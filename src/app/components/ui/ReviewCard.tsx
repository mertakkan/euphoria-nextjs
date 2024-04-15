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
  const partialStar = starRating - fullStars;

  return (
    <div className="bg-white border border-slate-400 rounded-lg py-8 px-6 mx-16 mb-20">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center">
          <Image
            src={image}
            alt={username}
            width={70}
            height={70}
            className="rounded-full mr-4"
          />
          <h3 className={`font-bold ${fonts.inter} ml-10`}>{username}</h3>
        </div>
        <div className="flex items-center">
          {[...Array(fullStars)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-3xl">
              &#9733;
            </span>
          ))}
          {partialStar > 0 && (
            <span className="relative inline-block text-3xl">
              <span
                className="text-yellow-400 absolute top-0 left-0 overflow-hidden"
                style={{ width: `${partialStar * 100}%` }}
              >
                &#9733;
              </span>
              <span className="text-gray-300">&#9733;</span>
            </span>
          )}
          {[...Array(5 - fullStars - (partialStar > 0 ? 1 : 0))].map((_, i) => (
            <span key={i} className="text-gray-300 text-3xl">
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
