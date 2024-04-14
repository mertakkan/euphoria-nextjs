//src\app\components\ui\DealCards.tsx

'use client';

import React from 'react';
import Image from "next/legacy/image";
import { fonts } from '@/app/utils/fonts';

interface DealCardProps {
  title: string;
  description: string;
  sale: string;
  image: string;
}

const DealCard: React.FC<DealCardProps> = ({
  title,
  description,
  sale,
  image,
}) => {
  return (
    <div className={`${fonts.inter} relative w-full`}>
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={550}
          height={300}
          objectFit="cover"
          className="rounded-xl shadow-lg"
        />
        <div className="flex items-center">
          <div className="absolute text-white text-center left-[8%] top-[50%] translate-y-[-50%]">
            <p className="text-2xl">{title}</p>
            <h2 className="text-3xl font-bold mt-12 mb-12">{description}</h2>
            <p className="text-2xl">{sale}</p>
            <button className="text-white text-xl underline hover:text-gray-100 mt-12">
              Explore Items
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const DealCards = () => {
  const dealsData = [
    {
      title: 'High Coziness',
      description: 'Low Price',
      sale: 'UPTO 50% OFF',
      image: '/dealtry4.jpg',
    },
    {
      title: 'Beyoung Presents',
      description: 'Breezy Summer Style',
      sale: 'UPTO 50% OFF',
      image: '/dealtry3.jpg',
    },
    // Add more dealcard data objects here
  ];

  return (
    <div className={`${fonts.inter} flex p-10 gap-40`}>
      {dealsData.map((deal, index) => (
        <div
          key={index}
          className=" transition duration-300 hover:scale-[105%]"
        >
          <DealCard
            key={index}
            title={deal.title}
            description={deal.description}
            sale={deal.sale}
            image={deal.image}
          />
        </div>
      ))}
    </div>
  );
};

export default DealCards;
