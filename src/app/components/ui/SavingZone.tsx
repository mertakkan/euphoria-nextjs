import Image from 'next/image';
import { Button } from './button';

const data1 = [
  {
    title: 'Hawaiian Shirts',
    text: 'Dress up in summer vibe',
    subtext: 'UPTO 50% OFF',
    image: '/saving-1.jpg',
  },
  {
    title: 'Printed T-Shirt',
    text: 'New Design Every Week',
    subtext: 'UPTO 40% OFF',
    image: '/saving-1.jpg',
  },
  {
    title: 'Cargo Joggers',
    text: 'Move with style & comfort',
    subtext: 'UPTO 60% OFF',
    image: '/saving-1.jpg',
  },
];

const data2 = [
  {
    title: 'Urban Shirts',
    text: 'Live in Comfort',
    subtext: 'FLAT 60% OFF',
    image: '/saving-1.jpg',
  },
  {
    title: 'Oversized T-Shirts',
    text: 'Street Style Icon',
    subtext: 'FLAT 50% OFF',
    image: '/saving-1.jpg',
  },
];

const SavingZone = () => {
  const boxStyle =
    'relative rounded-xl p-2 flex flex-col items-center justify-center';

  return (
    <>
      <div className="grid md:grid-cols-3 auto-rows-[400px] gap-4 p-10">
        {data1.map((item, i) => (
          <div key={i} className={boxStyle}>
            <Image
              src={item.image}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
            <div className="absolute inset-0 flex flex-col justify-center gap-6 text-white p-16">
              <h2 className="font-bold text-3xl">{item.title}</h2>
              <p className="font-medium text-lg">{item.subtext}</p>
              <p className="font-bold text-xl">{item.text}</p>
              <Button variant="shop">SHOP NOW</Button>
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-4 auto-rows-[400px] gap-4 p-10">
        {data2.map((item, i) => (
          <div
            key={i}
            className={`${boxStyle} ${
              i === 0 || i === 1 ? 'md:col-span-2' : ''
            }`}
          >
            <Image
              src={item.image}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />

            <div className="absolute inset-0 flex flex-col justify-center gap-6 text-white p-16">
              <h2 className="font-bold text-3xl">{item.title}</h2>
              <p className="font-medium text-lg">{item.subtext}</p>
              <p className="font-bold text-xl">{item.text}</p>
              <Button variant="shop">SHOP NOW</Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SavingZone;
