//src\app\components\ui\UserDropdown.tsx

'use client';

import { useEffect } from 'react';
import useSWR from 'swr';
import { Button } from './button';
import { prisma } from '@/app/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from './dropdown-menu';
import { ShoppingCart, User, Heart } from 'lucide-react';
import { handleSignOut } from './Navbar';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

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
        <DropdownMenuContent className="w-40">
          {user.cart?.items?.length > 0 ? (
            user.cart.items.map((item: any) => (
              <DropdownMenuItem key={item.id}>
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-8 h-8 mr-2"
                  />
                  <p>{item.title}</p>
                </div>
              </DropdownMenuItem>
            ))
          ) : (
            <DropdownMenuItem>No items in the cart</DropdownMenuItem>
          )}
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
