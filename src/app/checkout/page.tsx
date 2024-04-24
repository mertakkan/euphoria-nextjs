// src/app/checkout/page.tsx
'use client';
import React from 'react';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/app/lib/prisma';
import Checkout from '@/app/components/ui/Checkout';

interface CartItem {
  id: string;
  cartId: string;
  productId: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}

interface CheckoutPageProps {
  cartItems: CartItem[];
}

const CheckoutPage: React.FC<CheckoutPageProps> = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    // Handle unauthorized access, e.g., redirect to login page
    return <div>Unauthorized</div>;
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    // Handle user not found, e.g., show an error message
    return <div>User not found</div>;
  }

  const cart = await prisma.cart.findUnique({
    where: { userId: user.id },
    include: { items: true },
  });

  const [cartItems, setCartItems] = React.useState<CartItem[]>(
    cart?.items || []
  );

  return (
    <div>
      <Checkout cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
};

export default CheckoutPage;
