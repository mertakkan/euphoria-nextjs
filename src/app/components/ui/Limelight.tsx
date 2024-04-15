import Image from 'next/legacy/image';
import { Button } from './button';
import { fonts } from '@/app/utils/fonts';
import { Heart } from 'lucide-react';
import Card from './Card';

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
            <Card
              key={k}
              title={item.title}
              text={item.text}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Limelight;
