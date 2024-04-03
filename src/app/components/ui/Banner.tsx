'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { fonts } from '@/app/utils/fonts';

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePrevClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? bannerData.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 0);
  };

  const handleNextClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === bannerData.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 500);
  };

  const bannerData = [
    {
      title: 'Summer Value Pack',
      description: 'cool / colorful / comfy',
      image: '/women-3.jpg',
    },
    {
      title: 'Spring Value Pack',
      description: 'vibes / authentic / elegant',
      image: '/women-5.jpg',
    },
    // Add more banner data objects here
  ];

  const { title, description, image } = bannerData[currentIndex];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [isTransitioning]);

  return (
    <div className={`${fonts.inter} relative h-screen`}>
      <div className="relative h-full">
        {bannerData.map((item, index) => (
          <Image
            key={index}
            src={item.image}
            alt="Women Clothes Picture"
            layout="fill"
            objectFit="cover"
            className={`z-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            } ${isTransitioning ? 'opacity-0' : ''}`}
          />
        ))}
        <div className="absolute inset-0 flex items-center justify-between px-4 py-2 z-1">
          <button
            onClick={handlePrevClick}
            className="text-black text-6xl hover:text-gray-500"
          >
            &lt;
          </button>
          <div className="text-center absolute top-1 left-[50%] translate-x-[-50%]">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p>{description}</p>
          </div>
          <button
            onClick={handleNextClick}
            className="text-black text-6xl hover:text-gray-500"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
