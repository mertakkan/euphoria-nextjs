import * as React from 'react';
import Image from 'next/legacy/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './carousel';

interface ArrivalCard {
  title: string;
  image: string;
}

export function Arrivals() {
  const arrivalsData: ArrivalCard[] = [
    {
      title: 'Knitted Joggers',
      image: '/arrival/arrival-5.jpg',
    },
    {
      title: 'Full Sleeve',
      image: '/arrival/arrival-6.jpg',
    },
    {
      title: 'Active T-Shirts',
      image: '/arrival/arrival-7.jpg',
    },
    {
      title: 'Urban Shirts',
      image: '/arrival/arrival-6.jpg',
    },
    {
      title: 'Composite Shirts',
      image: '/arrival/arrival-7.jpg',
    },
    // Add more dealcard data objects here
  ];

  return (
    <Carousel className="w-full max-w-7xl m-20">
      <h2 className="text-2xl font-bold mb-8 flex">
        <span className="bg-blue-500 h-8 w-2 mr-4"></span>
        New Arrivals
      </h2>
      <CarouselContent className="-ml-1">
        {arrivalsData.map((arrival, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Image
                src={arrival.image}
                alt={arrival.title}
                width={400}
                height={275}
                className="rounded-lg transition duration-300 hover:scale-[102%]"
              />
              <h3 className="text-lg font-semibold">{arrival.title}</h3>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default Arrivals;
