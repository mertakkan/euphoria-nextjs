//src\app\components\ui\slider.tsx

'use client';

import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

import { cn } from '@/app/utils';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  const [values, setValues] = React.useState(props.defaultValue || [0, 1000]);

  return (
    <SliderPrimitive.Root
      defaultValue={[0, 1000]}
      ref={ref}
      className={cn(
        'relative flex w-[70%] touch-none select-none items-center',
        className
      )}
      onValueChange={setValues}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-slate-300 dark:bg-slate-800">
        <SliderPrimitive.Range className="absolute h-full bg-slate-900 dark:bg-slate-50" />
      </SliderPrimitive.Track>

      <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-slate-900 bg-white ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-50 dark:bg-slate-950 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300">
        <span className="absolute top-full mt-2 whitespace-nowrap text-sm text-slate-900 dark:text-slate-50">
          {'$' + values[0]}
        </span>
      </SliderPrimitive.Thumb>

      <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-slate-900 bg-white ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-50 dark:bg-slate-950 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300">
        <span className="absolute top-full mt-2 whitespace-nowrap text-sm text-slate-900 dark:text-slate-50">
          {'$' + values[1]}
        </span>
      </SliderPrimitive.Thumb>
    </SliderPrimitive.Root>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
