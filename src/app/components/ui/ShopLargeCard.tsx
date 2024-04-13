//src\app\components\ui\ShopLargeCard.tsx

'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { fonts } from '@/app/utils/fonts';
import { Button } from './button';

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

  return (
    <div className={`${fonts.inter} flex p-10`}>
      <div
        ref={cardRef}
        className={`${fonts.inter} relative w-full ${
          isInView
            ? 'scale-105 transition-transform duration-500'
            : 'scale-100 transition-transform duration-500'
        }`}
      >
        <div className={`${fonts.inter} relative w-full`}>
          <div className="relative">
            <Image
              src="/shoplargecard/largecard-1.jpg"
              alt="WE MADE YOUR EVERYDAY FASHION BETTER"
              width={1300}
              height={1000}
              objectFit="cover"
              className="rounded-xl shadow-lg"
            />
            <div className="flex items-center">
              <div className="absolute text-white text-left left-[8%] top-[50%] translate-y-[-50%] w-1/3">
                <h1 className="text-5xl font-bold">
                  WE MADE YOUR EVERYDAY FASHION BETTER
                </h1>
                <p className="text-2xl font-light mt-16 mb-16">
                  In our journey to improve everyday fashion, euphoria presents
                  EVERYDAY wear range - Comfortable & Affordable fashion 24/7
                </p>
                <Button variant="banner">Explore Items</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopLargeCard;
