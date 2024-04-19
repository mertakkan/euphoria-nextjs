// src\app\women\page.tsx
'use client';
import { useState } from 'react';
import ProductFilter from '../components/ui/ProductFilter';
import { SelectedFilters } from '../types';
import MenClothing from '../components/ui/MenClothing';

export default function menPage() {
  interface SelectedFilters {
    categories: string[];
    priceRange: number[];
    colors: string[];
    sizes: string[];
    dressStyles: string[];
  }

  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    categories: [],
    priceRange: [0, 1000],
    colors: [],
    sizes: [],
    dressStyles: [],
  });

  const handleFilterChange = (
    filterType: keyof SelectedFilters,
    value: string | number[]
  ) => {
    if (Array.isArray(value) && value.length === 0) {
      // Clear all filters
      setSelectedFilters({
        categories: [],
        priceRange: [0, 1000],
        colors: [],
        sizes: [],
        dressStyles: [],
      });
    } else {
      setSelectedFilters((prevFilters) => {
        if (filterType === 'priceRange') {
          return {
            ...prevFilters,
            [filterType]: value as number[],
          };
        } else {
          const currentValues = prevFilters[filterType] as string[];
          const updatedValues = currentValues.includes(value as string)
            ? currentValues.filter((item) => item !== value)
            : [...currentValues, value as string];

          return {
            ...prevFilters,
            [filterType]: updatedValues,
          };
        }
      });
    }
  };

  return (
    <main>
      <div className="flex">
        <ProductFilter
          onFilterChange={handleFilterChange}
          selectedFilters={selectedFilters}
        />
        <MenClothing selectedFilters={selectedFilters} />
      </div>
    </main>
  );
}
