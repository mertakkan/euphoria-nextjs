//src\app\components\ui\WomenClothing.tsx

import Image from 'next/legacy/image';
import { Button } from './button';
import { fonts } from '@/app/utils/fonts';
import { Heart } from 'lucide-react';
import Card from './Card';

interface WomenClothingProps {
  selectedFilters: {
    categories: string[];
    priceRange: number[];
    colors: string[];
    sizes: string[];
    dressStyles: string[];
  };
}

export const clothes = [
  {
    id: '13',
    title: 'Black T-Shirt',
    text: "Arman's Brand",
    price: 29.9,
    image: '/women-clothes/women-clothes-1.jpg',
    category: 'Printed T-shirts',
    color: 'Black',
    size: ['S', 'M', 'L'],
    dressStyle: 'Casual',
  },
  {
    id: '14',
    title: 'White Top',
    text: "Dilay's Brand",
    price: 39.9,
    image: '/women-clothes/women-clothes-2.jpg',
    category: 'Tops',
    color: 'White',
    size: ['S', 'M', 'L'],
    dressStyle: 'Casual',
  },
  {
    id: '15',
    title: 'White Puffer Coat',
    text: "MMA's Brand",
    price: 69.9,
    image: '/women-clothes/women-clothes-3.jpg',
    category: 'Tops',
    color: 'White',
    size: ['S', 'M', 'L'],
    dressStyle: 'Sports',
  },
  {
    id: '16',
    title: 'Red Jeans',
    text: "Eray's Brand",
    price: 49.9,
    image: '/women-clothes/women-clothes-4.jpg',
    category: 'Jeans',
    color: 'Red',
    size: ['S', 'M', 'L'],
    dressStyle: 'Casual',
  },
  {
    id: '17',
    title: 'White Tailor Shirt',
    text: 'Giovanni',
    price: 59.9,
    image: '/women-clothes/women-clothes-5.jpg',
    category: 'Tops',
    color: 'White',
    size: ['S', 'M', 'L', 'XL', 'XS'],
    dressStyle: 'Business',
  },
  {
    id: '18',
    title: 'Leather Jacket',
    text: 'Azarro',
    price: 59.9,
    image: '/women-clothes/women-clothes-6.jpg',
    category: 'Tops',
    color: 'Black',
    size: ['S', 'M', 'L', 'XL', 'XS'],
    dressStyle: 'Casual',
  },
  {
    id: '19',
    title: 'White Dress',
    text: 'Leveral Brand',
    price: 89.9,
    image: '/women-clothes/women-clothes-7.jpg',
    category: 'Tops',
    color: 'White',
    size: ['S', 'M', 'L', 'XL', 'XS'],
    dressStyle: 'Formal',
  },
  {
    id: '20',
    title: 'Designer Top',
    text: 'Cutiez',
    price: 39.9,
    image: '/women-clothes/women-clothes-8.jpg',
    category: 'Tops',
    color: 'White',
    size: ['S', 'M', 'L', 'XL', 'XS'],
    dressStyle: 'Elegant',
  },
  {
    id: '21',
    title: 'White Designer Shirt',
    text: 'Cutiez',
    price: 39.9,
    image: '/women-clothes/women-clothes-9.jpg',
    category: 'Tops',
    color: 'White',
    size: ['S', 'M', 'L', 'XL', 'XS'],
    dressStyle: 'Elegant',
  },
  {
    id: '22',
    title: 'Multicolor Sweater',
    text: 'Olagra',
    price: 39.9,
    image: '/women-clothes/women-clothes-10.jpg',
    category: 'Full sleeve T-shirts',
    color: 'Navy',
    size: ['S', 'M', 'L', 'XL', 'XS', '2XL'],
    dressStyle: 'Sports',
  },
  {
    id: '23',
    title: 'Purple Track Shirt',
    text: 'Sportiff',
    price: 29.9,
    image: '/women-clothes/women-clothes-11.jpg',
    category: 'Plain T-shirts',
    color: 'Purple',
    size: ['S', 'M', 'L', 'XL', 'XS', '2XL', 'XXS'],
    dressStyle: 'Sports',
  },
  {
    id: '24',
    title: 'White Puff Jacket',
    text: 'Zelda',
    price: 169.9,
    image: '/women-clothes/women-clothes-12.jpg',
    category: 'Kurti',
    color: 'White',
    size: ['S', 'M', 'L', 'XL', 'XS', '2XL', 'XXS'],
    dressStyle: 'Casual',
  },
];

const WomenClothing = ({ selectedFilters }: WomenClothingProps) => {
  const filteredClothes = clothes.filter((cloth) => {
    const isInCategories =
      selectedFilters.categories.length === 0 ||
      selectedFilters.categories.includes(cloth.category);
    const isInPriceRange =
      cloth.price >= selectedFilters.priceRange[0] &&
      cloth.price <= selectedFilters.priceRange[1];
    const isInColors =
      selectedFilters.colors.length === 0 ||
      selectedFilters.colors.includes(cloth.color);
    const isInSizes =
      selectedFilters.sizes.length === 0 ||
      cloth.size.some((size) => selectedFilters.sizes.includes(size));

    const isInDressStyles =
      selectedFilters.dressStyles.length === 0 ||
      selectedFilters.dressStyles.includes(cloth.dressStyle);

    return (
      isInCategories &&
      isInPriceRange &&
      isInColors &&
      isInSizes &&
      isInDressStyles
    );
  });

  return (
    <>
      <div className="p-20 w-full">
        <h2 className="text-2xl font-bold mb-8 flex gap-4">Women's Clothing</h2>
        <div
          className={`${fonts.inter} grid md:grid-cols-3 auto-rows-[500px] gap-16`}
        >
          {filteredClothes.map((cloth, index) => (
            <Card key={index} {...cloth} />
          ))}
        </div>
      </div>
    </>
  );
};

export default WomenClothing;
