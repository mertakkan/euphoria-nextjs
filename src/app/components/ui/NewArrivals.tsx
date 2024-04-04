'use client';

import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface CarouselItem {
  id: number;
  title: string;
  imageUrl: string;
}

const NewArrivals: React.FC = () => {
  const [carouselItems, setCarouselItems] = useState<CarouselItem[]>([
    {
      id: 1,
      title: 'Knitted Joggers',
      imageUrl: '/dealtry4.jpg',
    },
    {
      id: 2,
      title: 'Full Sleeve',
      imageUrl: '/dealtry4.jpg',
    },
    {
      id: 3,
      title: 'Active T-Shirts',
      imageUrl: '/dealtry4.jpg',
    },
    {
      id: 4,
      title: 'Urban Shirts',
      imageUrl: '/dealtry4.jpg',
    },
  ]);

  return (
    <div className="relative p-10">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <span className="bg-blue-500 h-8 w-2 mr-2"></span>
        New Arrival
      </h2>
      <Carousel
        showArrows
        showStatus={false}
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={5000}
        transitionTime={500}
      >
        {carouselItems.map((item) => (
          <div key={item.id} className="flex justify-center">
            <img src={item.imageUrl} alt={item.title} className="max-h-96" />
            <p className="text-center mt-2">{item.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default NewArrivals;
