//src\app\components\ui\UserDropdown.tsx

'use client';

import { useEffect } from 'react';
import useSWR, { mutate } from 'swr';
import { Button } from './button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu';
import { ShoppingCart, User, Heart } from 'lucide-react';
import { handleSignOut } from './Navbar';
import Link from 'next/link';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const handleQuantityChange = async (itemId: string, newQuantity: number) => {
  if (newQuantity === 0) {
    // Delete the item from the cart if quantity becomes 0
    await fetch(`/api/cart/${itemId}`, {
      method: 'DELETE',
    });
  } else {
    // Update the quantity of the cart item
    await fetch(`/api/cart/${itemId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quantity: newQuantity }),
    });
  }

  // Update the user data to reflect the changes in the cart
  mutate('/api/user');
};

export function UserDropdown() {
  const { data: user, error } = useSWR('/api/user', fetcher);

  if (error) {
    // Handle error state
    return <div>Error loading user data</div>;
  }

  if (!user) {
    // Handle loading state or unauthenticated state
    return null;
  }
  return (
    <div className="flex justify-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="rounded-full">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-96">
          <div className="max-h-80 overflow-y-auto">
            {user.cart?.items?.length > 0 ? (
              user.cart.items.map((item: any) => (
                <DropdownMenuItem key={item.id}>
                  <div className="flex justify-between items-center w-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-20 rounded-md mr-4"
                    />
                    <div className="flex-grow">
                      <p className="text-lg font-medium">{item.title}</p>
                      <p className="text-xs text-gray-500">
                        ${item.quantity * item.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <button
                        className="text-black flex justify-center items-center w-6 h-6 text-lg px-1 border rounded-full hover:bg-gray-600 hover:text-white focus:outline-none"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleQuantityChange(item.id, item.quantity - 1);
                        }}
                      >
                        -
                      </button>
                      <span className="mx-3 text-lg">{item.quantity}</span>
                      <button
                        className="text-black flex justify-center items-center w-6 h-6 text-lg px-1 border rounded-full hover:bg-gray-600 hover:text-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleQuantityChange(item.id, item.quantity + 1);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </DropdownMenuItem>
              ))
            ) : (
              <DropdownMenuItem>No items in the cart</DropdownMenuItem>
            )}
          </div>
          <div className="mt-4">
            <Link href="/checkout">
              <Button variant="default" className="w-full">
                Checkout
              </Button>
            </Link>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="rounded-full">
            <User className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40">
          <DropdownMenuItem>
            <button
              className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="rounded-full">
            <Heart className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40">
          <DropdownMenuItem>
            <p>A bunch of items FAVORITE 1</p>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <p>A bunch of items FAVORITE 2</p>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <p>A bunch of items FAVORITE 3</p>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
