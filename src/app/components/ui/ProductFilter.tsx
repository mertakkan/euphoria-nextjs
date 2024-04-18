// src\app\components\ui\ProductFilter.tsx

'use client';

import Image from 'next/legacy/image';
import { fonts } from '@/app/utils/fonts';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './accordion';
import { RangeSlider } from './RangeSlider';
import { SlidersVertical } from 'lucide-react';
import { Button } from './button';

const categories = [
  { title: 'Tops' },
  { title: 'Printed T-shirts' },
  { title: 'Joggers' },
  { title: 'Boxers' },
  { title: 'Kurti' },
  { title: 'Full sleeve T-shirts' },
  { title: 'Plain T-shirts' },
  { title: 'Jeans' },
  { title: 'Payjamas' },
];

const colors = [
  { name: 'Red', value: 'bg-red-500' },
  { name: 'Blue', value: 'bg-blue-500' },
  { name: 'Green', value: 'bg-green-500' },
  { name: 'Black', value: 'bg-black' },
  { name: 'Orange', value: 'bg-orange-500' },
  { name: 'Navy', value: 'bg-blue-700' },
  { name: 'Purple', value: 'bg-purple-500' },
  { name: 'White', value: 'bg-white' },
  { name: 'Yellow', value: 'bg-yellow-500' },
];

const sizes = [
  { name: 'XXS' },
  { name: 'XS' },
  { name: 'S' },
  { name: 'M' },
  { name: 'L' },
  { name: 'XL' },
  { name: 'XXL' },
  { name: '2XL' },
  { name: '3XL' },
];

const dressStyles = [
  { name: 'Casual' },
  { name: 'Formal' },
  { name: 'Sports' },
  { name: 'Business' },
  { name: 'Elegant' },
];

const ProductFilter = () => {
  return (
    <div className={`${fonts.inter} md:w-1/6 m-20 self-start border p-3`}>
      <Accordion type="multiple" className="w-full" defaultValue={['item-1']}>
        <AccordionItem value="item-1" disabled>
          <AccordionTrigger>
            {' '}
            <span>Filter</span>
          </AccordionTrigger>
          <AccordionContent className="w-full flex flex-col">
            {categories.map((category, index) => (
              <AccordionItem
                key={index}
                value={`item-${category.title.toLowerCase().replace(' ', '-')}`}
              >
                <button className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-md font-medium">
                  {category.title}
                </button>
              </AccordionItem>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Price</AccordionTrigger>
          <AccordionContent className="w-full flex justify-center">
            <RangeSlider />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Colors</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-3 gap-2">
              {colors.map((color, index) => (
                <div key={index} className="flex flex-col items-center">
                  <button
                    className={`w-8 h-8 rounded-full border hover:border-4 hover:border-gray-300 ${color.value}`}
                  ></button>
                  <span className="text-xs mt-1">{color.name}</span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Size</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-3 gap-3 p-2">
              {sizes.map((size, index) => (
                <div key={index} className="flex justify-center">
                  <Button
                    variant="category"
                    className="border-gray-300 rounded-xl"
                  >
                    {size.name}
                  </Button>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Dress Style</AccordionTrigger>
          <AccordionContent>
            {dressStyles.map((style, index) => (
              <AccordionItem
                key={index}
                value={`item-${style.name.toLowerCase().replace(' ', '-')}`}
              >
                <button className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-md font-medium">
                  {style.name}
                </button>
              </AccordionItem>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ProductFilter;
