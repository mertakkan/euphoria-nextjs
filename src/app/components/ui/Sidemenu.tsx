'use client';

import Image from 'next/legacy/image';
import { fonts } from '@/app/utils/fonts';

import { Slider } from '@nextui-org/react';
import { Accordion, AccordionItem } from '@nextui-org/react';

const defaultContent = 'THIS IS AN ACCORDION ITEM';

const Sidemenu = () => {
  return (
    <div className={`${fonts.inter} w-1/6`}>
      <Accordion>
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="Price"
          className=""
        >
          <Slider
            label="Price Range"
            step={50}
            minValue={0}
            maxValue={1000}
            defaultValue={[100, 500]}
            formatOptions={{ style: 'currency', currency: 'USD' }}
            className="max-w-md w-5/6"
          />
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title="Colors"
          className=""
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="Size">
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Sidemenu;
