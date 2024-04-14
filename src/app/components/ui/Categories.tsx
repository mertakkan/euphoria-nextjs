import Image from "next/legacy/image";
import { Button } from './button';
import { fonts } from '@/app/utils/fonts';
import { ChevronRight } from 'lucide-react';

const forMen = [
  {
    title: 'Shirts',
    text: 'Explore Now!',
    image: '/categories/cat-1.jpg',
  },
  {
    title: 'Jeans',
    text: 'Explore Now!',
    image: '/categories/cat-2.jpg',
  },
  {
    title: 'Cargo Joggers',
    text: 'Explore Now!',
    image: '/categories/cat-3.jpg',
  },
  {
    title: 'Boxers',
    text: 'Explore Now!',
    image: '/categories/cat-4.jpg',
  },
];

const forWomen = [
  {
    title: 'Hoodies & Sweatshirts',
    text: 'Explore Now!',
    image: '/categories/cat-5.jpg',
  },
  {
    title: 'Coats & Parkas',
    text: 'Explore Now!',
    image: '/categories/cat-6.jpg',
  },
  {
    title: 'Activewear',
    text: 'Explore Now!',
    image: '/categories/cat-7.jpg',
  },
  {
    title: 'Tees & T-Shirt',
    text: 'Explore Now!',
    image: '/categories/cat-8.jpg',
  },
];

const Categories = () => {
  const categoryCard =
    'flex flex-col items-center justify-center rounded-xl overflow-hidden';
  return (
    <>
      <div className="p-10">
        <h2 className="text-2xl font-bold mb-8 flex gap-4">
          <span className="bg-blue-500 h-8 w-2"></span>
          Categories For Men
        </h2>
        <div
          className={`${fonts.inter} grid md:grid-cols-4 auto-rows-[600px] gap-16`}
        >
          {forMen.map((item, k) => (
            <div key={k} className={categoryCard}>
              <div className="relative h-full w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
              <div className="flex justify-between w-full mt-4 px-6">
                <div>
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <p className="text-lg">{item.text}</p>
                </div>

                <Button variant="outline" size="iconCategory">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-8 flex gap-4 mt-20">
          <span className="bg-blue-500 h-8 w-2"></span>
          Categories For Women
        </h2>
        <div
          className={`${fonts.inter} grid md:grid-cols-4 auto-rows-[600px] gap-16`}
        >
          {forWomen.map((item, j) => (
            <div key={j} className={categoryCard}>
              <div className="relative h-3/4 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
              <div className="flex justify-between w-full mt-4 px-6">
                <div>
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <p className="text-lg">{item.text}</p>
                </div>

                <Button variant="outline" size="iconCategory">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
