//src\app\components\ui\ShopLargeCard.tsx

'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { fonts } from '@/app/utils/fonts';
import { Button } from './button';

interface DealCardProps {
  title: string;
  description: string;
  image: string;
}

const DealCard: React.FC<DealCardProps> = ({ title, description, image }) => {
  return (
    <div className={`${fonts.inter} relative w-full`}>
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={1300}
          height={1000}
          objectFit="cover"
          className="rounded-xl shadow-lg"
        />
        <div className="flex items-center">
          <div className="absolute text-white text-left left-[8%] top-[50%] translate-y-[-50%] w-1/3">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="text-2xl font-light mt-16 mb-16">{description}</p>
            <Button variant="banner">Explore Items</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ShopLargeCard = () => {
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const dealsData = [
    {
      title: 'WE MADE YOUR EVERYDAY FASHION BETTER',
      description:
        'In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7',
      image: '/shoplargecard/largecard-1.jpg',
    },
  ];

  return (
    <div className={`${fonts.inter} flex p-10 gap-40`}>
      {dealsData.map((deal, index) => (
        <div
          key={index}
          ref={cardRef}
          className={`${fonts.inter} relative w-full ${
            isInView
              ? 'scale-105 transition-transform duration-500'
              : 'scale-100 transition-transform duration-500'
          }`}
        >
          <DealCard
            title={deal.title}
            description={deal.description}
            image={deal.image}
          />
        </div>
      ))}
    </div>
  );
};

export default ShopLargeCard;
