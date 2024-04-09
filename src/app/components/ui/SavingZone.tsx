import Image from 'next/image';

const data1 = [
  {
    title: 'Subscriber',
    value: 'Sale Now',
    image: '/saving-1.jpg',
  },
  {
    title: 'Revenue',
    value: 'Sale Now',
    image: '/saving-1.jpg',
  },
  {
    title: 'User Count',
    value: 'Sale Now',
    image: '/saving-1.jpg',
  },
];

const data2 = [
  {
    title: 'Subscriber',
    value: 'Sale Now',
    image: '/saving-1.jpg',
  },
  {
    title: 'Revenue',
    value: 'Sale Now',
    image: '/saving-1.jpg',
  },
];

const SavingZone = () => {
  const boxStyle =
    'relative bg-white border-2 rounded-xl p-2 flex flex-col items-center justify-center';

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
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4">
              <h2 className="text-xl">{item.title}</h2>
              <p className="font-bold text-2xl">{item.value}</p>
              <button className="mt-4 bg-white text-black px-4 py-2 rounded">
                Button
              </button>
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
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4">
              <h2 className="text-xl text-left">{item.title}</h2>
              <p className="font-bold text-2xl text-left">{item.value}</p>
              <button className="mt-4 bg-white text-black px-4 py-2 rounded float-left">
                Button
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SavingZone;
