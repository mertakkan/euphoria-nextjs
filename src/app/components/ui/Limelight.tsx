import Image from 'next/legacy/image';
import { Button } from './button';
import { fonts } from '@/app/utils/fonts';
import { Heart } from 'lucide-react';

const forMen = [
  {
    title: 'Black T-Shirt',
    text: "Arman's Brand",
    price: '$29.90',
    image: '/limelight/limelight-1.jpg',
  },
  {
    title: 'Cream Purse',
    text: "Dilay's Brand",
    price: '$59.90',
    image: '/limelight/limelight-2.jpg',
  },
  {
    title: 'Ivory Coat',
    text: "MMA's Brand",
    price: '$69.90',
    image: '/limelight/limelight-3.jpg',
  },
  {
    title: 'Print Hat',
    text: "Eray's Brand",
    price: '$19.90',
    image: '/limelight/limelight-4.jpg',
  },
];

const Limelight = () => {
  const categoryCard =
    'flex flex-col items-center justify-center rounded-xl overflow-hidden relative';
  return (
    <>
      <div className="p-10">
        <h2 className="text-2xl font-bold mb-8 flex gap-4">
          <span className="bg-blue-500 h-8 w-2"></span>
          In The Limelight
        </h2>
        <div
          className={`${fonts.inter} grid md:grid-cols-4 auto-rows-[500px] gap-16`}
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
              <Button
                variant="outline"
                size="iconCategory"
                className="absolute top-4 right-4"
              >
                <Heart className="h-4 w-4" />
              </Button>

              <div className="flex justify-between w-full mt-4 px-6">
                <div>
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <p className="text-lg">{item.text}</p>
                </div>

                <Button variant="outline" size="sm" className="bg-gray-100">
                  <p className="text-lg font-medium">{item.price}</p>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Limelight;
