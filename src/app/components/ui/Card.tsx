// src\app\components\ui\Card.tsx

import Image from 'next/legacy/image';
import { Button } from './button';
import { fonts } from '@/app/utils/fonts';
import { Heart } from 'lucide-react';

interface CardProps {
  title: string;
  text: string;
  price: number;
  image: string;
}

const Card = ({ title, text, price, image }: CardProps) => {
  const categoryCard =
    'flex flex-col items-center justify-center rounded-xl overflow-hidden relative';

  return (
    <div className={categoryCard}>
      <div className="relative h-full w-full">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <Button
        variant="outline"
        size="iconCategory"
        className="absolute top-4 right-4"
      >
        <Heart className="h-4 w-4" />
      </Button>

      <div className="flex justify-between w-full mt-4 px-6">
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-lg">{text}</p>
        </div>

        <Button variant="outline" size="sm" className=" bg-slate-50">
          <p className="text-lg font-medium">${price.toFixed(2)}</p>
        </Button>
      </div>
    </div>
  );
};

export default Card;
