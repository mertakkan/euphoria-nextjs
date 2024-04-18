// src\app\components\ui\RangeSlider.tsx
'use client';
import { cn } from '@/app/utils';
import { Slider } from './slider';
import { useState } from 'react';

type RangeSliderProps = {
  className?: string;
  onChange: (value: number[]) => void;
};

export function RangeSlider({ className, onChange }: RangeSliderProps) {
  const [value, setValue] = useState([0, 1000]);

  const handleChange = (newValue: number[]) => {
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <Slider
      minStepsBetweenThumbs={1}
      max={1000}
      step={50}
      className={cn('py-10', className)}
      value={value}
      onValueChange={handleChange}
    />
  );
}
