// src\app\product\[slug]\page.tsx
'use client';
import Image from 'next/legacy/image';
import { Button } from '@/app/components/ui/button';
import { fonts } from '@/app/utils/fonts';
import { ShoppingCart } from 'lucide-react';
import { clothes as womenClothes } from '@/app/components/ui/WomenClothing';
import { clothes as menClothes } from '@/app/components/ui/MenClothing';
import { mutate } from 'swr';

interface Cloth {
  id: string;
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

const ProductPage = async ({ params }: ProductPageProps) => {
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

  const handleAddToCart = async () => {
    try {
      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: product.id,
          title: product.title,
          image: product.image,
          quantity: 1,
        }),
      });

      if (response.ok) {
        // Update the user data to reflect the new cart item
        mutate('/api/user');
      } else {
        // Handle error
      }
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div className={` ${fonts.inter} px-24 flex justify-center`}>
      <div className="flex gap-10">
        <div className="relative h-full w-[750px]">
          <Image
            src={product.image}
            alt={product.title}
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>
        <div className="p-28 flex flex-col">
          <p className="mb-4 opacity-50 text-lg">{product.category}</p>
          <h1 className="text-4xl font-bold mb-2">{product.title}</h1>
          <p className="text-xl mb-12">{product.text}</p>
          <p className="mb-4">Select Size:</p>
          <div className="flex gap-4 w-1/3">
            {product.size.map((size, index) => (
              <Button
                key={index}
                variant="category"
                className="border-gray-300 rounded-xl"
              >
                {size}
              </Button>
            ))}
          </div>
          <p className="mb-4 mt-4">Colour: {product.color}</p>
          <div className="flex gap-10 items-center mt-12">
            <Button
              className="flex items-center justify-center w-1/3"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
            <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
          </div>
          <hr className="mt-10 border-3"></hr>
          <div className="grid grid-cols-2 gap-6 p-2 mt-10">
            <div className="flex items-center bg-gray-100 rounded-md p-4">
              <svg
                className="h-6 w-6 mr-2 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span className="text-gray-600 font-medium">Secure payment</span>
            </div>

            <div className="flex items-center bg-gray-100 rounded-md p-4">
              <svg
                className="h-6 w-6 mr-2 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 19a2 2 0 104 0M7 19a2 2 0 104 0"
                />
              </svg>
              <span className="text-gray-600 font-medium">Size & Fit</span>
            </div>

            <div className="flex items-center bg-gray-100 rounded-md p-4">
              <svg
                className="h-6 w-6 mr-2 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="text-gray-600 font-medium">Free shipping</span>
            </div>

            <div className="flex items-center bg-gray-100 rounded-md p-4">
              <svg
                className="h-6 w-6 mr-2 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="text-gray-600 font-medium">
                Free Shipping & Returns
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
