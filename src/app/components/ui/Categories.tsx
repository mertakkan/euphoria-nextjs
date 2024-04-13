import Image from 'next/image';
import { Button } from './button';
import { fonts } from '@/app/utils/fonts';

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
    'relative rounded-xl p-2 flex flex-col items-center justify-center';
  return (
    <>
      <>
        <h2 className="text-2xl font-bold mb-8 flex">
          <span className="bg-blue-500 h-8 w-2 mr-4 ml-4"></span>
          Categories For Men
        </h2>
        <div
          className={`${fonts.inter} grid md:grid-cols-4 auto-rows-[300px] gap-4 p-10`}
        >
          {forMen.map((item, k) => (
            <div key={k} className={categoryCard}>
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
              <div
                className={`absolute inset-0 flex flex-col justify-center gap-6 text-white p-16 ${
                  k < 2 ? 'text-slate-800' : 'text-white'
                }`}
              >
                <h2 className="text-3xl">{item.title}</h2>
                <p className="text-lg">{item.text}</p>
                <Button
                  variant="shop"
                  className={
                    k < 2
                      ? 'text-slate-800 border-slate-800 hover:bg-slate-800 hover:text-white'
                      : 'text-white'
                  }
                >
                  SHOP NOW
                </Button>
              </div>
            </div>
          ))}
        </div>
      </>

      <>
        <h2 className="text-2xl font-bold mb-8 flex">
          <span className="bg-blue-500 h-8 w-2 mr-4 ml-4"></span>
          Categories For Women
        </h2>
        <div
          className={`${fonts.inter} grid md:grid-cols-4 auto-rows-[300px] gap-4 p-10`}
        >
          {forWomen.map((item, j) => (
            <div key={j} className={categoryCard}>
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
              <div
                className={`absolute inset-0 flex flex-col justify-center gap-6 text-white p-16 ${
                  j < 2 ? 'text-slate-800' : 'text-white'
                }`}
              >
                <h2 className="text-3xl">{item.title}</h2>
                <p className="text-lg">{item.text}</p>
                <Button
                  variant="shop"
                  className={
                    j < 2
                      ? 'text-slate-800 border-slate-800 hover:bg-slate-800 hover:text-white'
                      : 'text-white'
                  }
                >
                  SHOP NOW
                </Button>
              </div>
            </div>
          ))}
        </div>
      </>
    </>
  );
};

export default Categories;
