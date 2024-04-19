//src\app\components\ui\MenClothing.tsx

import Image from 'next/legacy/image';
import { Button } from './button';
import { fonts } from '@/app/utils/fonts';
import { Heart } from 'lucide-react';
import Card from './Card';

interface MenClothingProps {
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
    title: 'Black Jeans',
    text: "Arman's Brand",
    price: 49.9,
    image: '/men-clothes/men-clothes-1.jpg',
    category: 'Jeans',
    color: 'Black',
    size: ['S', 'M', 'L', 'XL', 'XS'],
    dressStyle: 'Casual',
  },
  {
    title: 'Orange Designer Shirt',
    text: "Dilay's Brand",
    price: 59.9,
    image: '/men-clothes/men-clothes-2.jpg',
    category: 'Tops',
    color: 'Orange',
    size: ['S', 'M', 'L'],
    dressStyle: 'Elegant',
  },
  {
    title: 'White Elegant Shirt',
    text: "MMA's Brand",
    price: 69.9,
    image: '/men-clothes/men-clothes-3.jpg',
    category: 'Tops',
    color: 'White',
    size: ['S', 'M', 'L'],
    dressStyle: 'Elegant',
  },
  {
    title: 'White Plain Shirt',
    text: "Eray's Brand",
    price: 39.9,
    image: '/men-clothes/men-clothes-4.jpg',
    category: 'Plain T-shirts',
    color: 'White',
    size: ['S', 'M', 'L'],
    dressStyle: 'Casual',
  },
  {
    title: 'White Printed T-Shirt',
    text: 'Giovanni',
    price: 59.9,
    image: '/men-clothes/men-clothes-5.jpg',
    category: 'Printed T-shirts',
    color: 'White',
    size: ['S', 'M', 'L', 'XL', 'XS'],
    dressStyle: 'Casual',
  },
  {
    title: 'Sports Jacket',
    text: 'Azarro',
    price: 59.9,
    image: '/men-clothes/men-clothes-6.jpg',
    category: 'Tops',
    color: 'Black',
    size: ['S', 'M', 'L', 'XL', 'XS'],
    dressStyle: 'Sports',
  },
  {
    title: 'Navy Top',
    text: 'Leveral Brand',
    price: 89.9,
    image: '/men-clothes/men-clothes-7.jpg',
    category: 'Tops',
    color: 'Navy',
    size: ['S', 'M', 'L', 'XL', 'XS'],
    dressStyle: 'Casual',
  },
  {
    title: 'Navy Suit',
    text: 'Cutiez',
    price: 39.9,
    image: '/men-clothes/men-clothes-8.jpg',
    category: 'Tops',
    color: 'Navy',
    size: ['S', 'M', 'L', 'XL', 'XS'],
    dressStyle: 'Business',
  },
  {
    title: 'Purple Top',
    text: 'Cutiez',
    price: 39.9,
    image: '/men-clothes/men-clothes-9.jpg',
    category: 'Tops',
    color: 'Purple',
    size: ['S', 'M', 'L'],
    dressStyle: 'Casual',
  },
  {
    title: 'Red Sweater Top',
    text: 'Olagra',
    price: 39.9,
    image: '/men-clothes/men-clothes-10.jpg',
    category: 'Tops',
    color: 'Red',
    size: ['S', 'M', 'L', 'XL', 'XS', '2XL'],
    dressStyle: 'Casual',
  },
  {
    title: 'Printed Jaguar T-Shirt',
    text: 'Jaguaro',
    price: 29.9,
    image: '/men-clothes/men-clothes-11.jpg',
    category: 'Printed T-shirts',
    color: 'Yellow',
    size: ['S', 'M', 'L', 'XL', 'XS', '2XL', 'XXS'],
    dressStyle: 'Casual',
  },
  {
    title: 'Yellow-Black Shirt',
    text: 'Zelda',
    price: 69.9,
    image: '/men-clothes/men-clothes-12.jpg',
    category: 'Tops',
    color: 'Yellow',
    size: ['S', 'M', 'L', 'XL', 'XS', '2XL', 'XXS'],
    dressStyle: 'Casual',
  },
];

const MenClothing = ({ selectedFilters }: MenClothingProps) => {
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
        <h2 className="text-2xl font-bold mb-8 flex gap-4">Men's Clothing</h2>
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

export default MenClothing;
