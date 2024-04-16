// src\app\components\ui\RangeSlider.tsx

import { cn } from '@/app/utils';
import { Slider } from './slider';

type SliderProps = React.ComponentProps<typeof Slider>;

export function RangeSlider({ className, ...props }: SliderProps) {
  return (
    <Slider
      minStepsBetweenThumbs={1}
      max={1000}
      step={50}
      className={cn('py-10', className)}
      {...props}
    />
  );
}
