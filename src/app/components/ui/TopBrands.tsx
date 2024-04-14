import Image from 'next/legacy/image';
import { fonts } from '@/app/utils/fonts';

const brands = [
  {
    title: 'Nike',
    image: '/brands/brand-3.jpg',
  },
  {
    title: 'H&M',
    image: '/brands/brand-1.jpg',
  },
  {
    title: 'Levis',
    image: '/brands/brand-2.jpg',
  },
  {
    title: 'US POLO ASSN',
    image: '/brands/brand-5.jpg',
  },
  {
    title: 'Puma',
    image: '/brands/brand-4.jpg',
  },
];

const TopBrands = () => {
  const brandCard =
    'flex flex-col items-center justify-center rounded-xl overflow-hidden';
  return (
    <div
      className={` ${fonts.inter} rounded-3xl flex flex-col w-full bg-[#3C4242] gap-20 p-10 justify-center items-center`}
    >
      <p className="text-6xl text-white font-bold">Top Brands Deal</p>
      <p className="text-2xl font-light text-white">
        Up To <span className="text-yellow-300 font-medium">60%</span> off on
        brands
      </p>

      <div
        className={`${fonts.inter} grid md:grid-cols-5 auto-rows-[200px] gap-16`}
      >
        {brands.map((item, k) => (
          <div key={k} className={brandCard}>
            <div className="relative h-full w-full">
              <Image
                src={item.image}
                alt={item.title}
                width={225}
                height={130}
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBrands;
