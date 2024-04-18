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
import { Button } from './button';
import { SelectedFilters } from '../../types';
import { X } from 'lucide-react';

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

interface ProductFilterProps {
  onFilterChange: (filterType: keyof SelectedFilters, value: any) => void;
  selectedFilters: SelectedFilters;
}

const ProductFilter = ({
  onFilterChange,
  selectedFilters,
}: ProductFilterProps) => {
  const handleClearFilters = () => {
    onFilterChange('categories', []);
    onFilterChange('priceRange', [0, 1000]);
    onFilterChange('colors', []);
    onFilterChange('sizes', []);
    onFilterChange('dressStyles', []);
  };

  const handleCategoryClick = (category: string) => {
    onFilterChange('categories', category);
  };

  const handlePriceChange = (priceRange: number[]) => {
    onFilterChange('priceRange', priceRange);
  };

  const handleColorClick = (color: string) => {
    onFilterChange('colors', color);
  };

  const handleSizeClick = (size: string) => {
    onFilterChange('sizes', size);
  };

  const handleDressStyleClick = (dressStyle: string) => {
    onFilterChange('dressStyles', dressStyle);
  };

  return (
    <div className={`${fonts.inter} md:w-1/6 m-20 self-start border p-3`}>
      <Accordion type="multiple" className="w-full" defaultValue={['item-1']}>
        <AccordionItem value="item-1" disabled>
          <AccordionTrigger>
            <span>Filter</span>
          </AccordionTrigger>
          <AccordionContent className="w-full flex flex-col">
            {categories.map((category, index) => (
              <AccordionItem
                key={index}
                value={`item-${category.title.toLowerCase().replace(' ', '-')}`}
              >
                <button
                  className={`text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-md font-medium ${
                    selectedFilters.categories.includes(category.title)
                      ? 'opacity-50'
                      : ''
                  }`}
                  onClick={() => handleCategoryClick(category.title)}
                >
                  {category.title}
                </button>
              </AccordionItem>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Price</AccordionTrigger>
          <AccordionContent className="w-full flex justify-center">
            <RangeSlider onChange={handlePriceChange} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Colors</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-3 gap-2">
              {colors.map((color, index) => (
                <div key={index} className="flex flex-col items-center">
                  <button
                    className={`w-8 h-8 rounded-full border hover:border-4 hover:border-gray-300 ${
                      color.value
                    } ${
                      selectedFilters.colors.includes(color.name)
                        ? 'border-4 border-black'
                        : ''
                    }`}
                    onClick={() => handleColorClick(color.name)}
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
                    className={`border-gray-300 rounded-xl ${
                      selectedFilters.sizes.includes(size.name)
                        ? 'bg-black text-white'
                        : ''
                    }`}
                    onClick={() => handleSizeClick(size.name)}
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
                <button
                  className={`text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-md font-medium ${
                    selectedFilters.dressStyles.includes(style.name)
                      ? 'opacity-50'
                      : ''
                  }`}
                  onClick={() => handleDressStyleClick(style.name)}
                >
                  {style.name}
                </button>
              </AccordionItem>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-clear">
          <Button
            variant="destructive"
            className="mt-4 flex items-center justify-center"
            onClick={handleClearFilters}
          >
            <X className="mr-2 h-4 w-4" /> Clear Filters
          </Button>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ProductFilter;
