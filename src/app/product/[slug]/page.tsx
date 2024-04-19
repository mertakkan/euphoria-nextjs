// src\app\product\[slug]\page.tsx
'use client';
import { useRouter } from 'next/router';
import Image from 'next/legacy/image';
import { Button } from '@/app/components/ui/button';
import { fonts } from '@/app/utils/fonts';
import { Heart } from 'lucide-react';
import { clothes as womenClothes } from '@/app/components/ui/WomenClothing';
import { clothes as menClothes } from '@/app/components/ui/MenClothing'; // Import men's clothes array

interface Cloth {
  title: string;
  text: string;
  price: number;
  image: string;
  category: string;
  color: string;
  size: string[];
  dressStyle: string;
}

interface ProductPageProps {
  params: {
    slug: string;
  };
}

const ProductPage = ({ params }: ProductPageProps) => {
  const { slug } = params;

  const product =
    womenClothes.find(
      (cloth: Cloth) =>
        cloth.title.toLowerCase() === decodeURIComponent(slug).toLowerCase()
    ) ||
    menClothes.find(
      (cloth: Cloth) =>
        cloth.title.toLowerCase() === decodeURIComponent(slug).toLowerCase()
    );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-20">
      <h1 className="text-3xl font-bold mb-8">{product.title}</h1>
      <div className="flex gap-8">
        <div className="relative h-96 w-96">
          <Image
            src={product.image}
            alt={product.title}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        <div>
          <p className="text-xl mb-4">{product.text}</p>
          <p className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
          <p className="mb-4">Category: {product.category}</p>
          <p className="mb-4">Color: {product.color}</p>
          <p className="mb-4">Sizes: {product.size.join(', ')}</p>
          <p className="mb-4">Dress Style: {product.dressStyle}</p>
          <Button variant="outline" size="sm" className="bg-slate-50">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
