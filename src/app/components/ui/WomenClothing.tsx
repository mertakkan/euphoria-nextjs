import Image from 'next/legacy/image';
import { Button } from './button';
import { fonts } from '@/app/utils/fonts';
import { Heart } from 'lucide-react';
import Card from './Card';

const women_clothes = [
  {
    title: 'Black T-Shirt',
    text: "Arman's Brand",
    price: '$29.90',
    image: '/women-clothes/women-clothes-1.jpg',
  },
  {
    title: 'Cream Purse',
    text: "Dilay's Brand",
    price: '$59.90',
    image: '/women-clothes/women-clothes-2.jpg',
  },
  {
    title: 'Ivory Coat',
    text: "MMA's Brand",
    price: '$69.90',
    image: '/women-clothes/women-clothes-3.jpg',
  },
  {
    title: 'Print Hat',
    text: "Eray's Brand",
    price: '$19.90',
    image: '/women-clothes/women-clothes-4.jpg',
  },
  {
    title: 'Tailor Shirt',
    text: 'Giovanni',
    price: '$59.90',
    image: '/women-clothes/women-clothes-5.jpg',
  },
  {
    title: 'Leather Jacket',
    text: 'Azorra',
    price: '$59.90',
    image: '/women-clothes/women-clothes-6.jpg',
  },
  {
    title: 'White Dress',
    text: 'Leveral Brand',
    price: '$89.90',
    image: '/women-clothes/women-clothes-7.jpg',
  },
  {
    title: 'Designer Top',
    text: 'Cutiez',
    price: '$39.90',
    image: '/women-clothes/women-clothes-8.jpg',
  },
  {
    title: 'Gray Designer Shirt',
    text: 'Halfmoons',
    price: '$49.90',
    image: '/women-clothes/women-clothes-9.jpg',
  },
  {
    title: 'Multicolor Sweater',
    text: 'Olagra',
    price: '$39.90',
    image: '/women-clothes/women-clothes-10.jpg',
  },
  {
    title: 'Purple Track Shirt',
    text: 'Sportiff',
    price: '$29.90',
    image: '/women-clothes/women-clothes-11.jpg',
  },
  {
    title: 'White Puff Jacket',
    text: 'Zelda',
    price: '$69.90',
    image: '/women-clothes/women-clothes-12.jpg',
  },
];

const WomenClothing = () => {
  return (
    <>
      <div className="p-20 w-full">
        <h2 className="text-2xl font-bold mb-8 flex gap-4">Women's Clothing</h2>
        <div
          className={`${fonts.inter} grid md:grid-cols-3 auto-rows-[500px] gap-16`}
        >
          {women_clothes.map((item, k) => (
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

export default WomenClothing;
