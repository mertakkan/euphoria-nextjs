// src/app/checkout/page.tsx
'use client';
import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { useSession } from 'next-auth/react';
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

const CheckoutPage: React.FC = () => {
  return (
    <SessionProvider>
      <CheckoutContent />
    </SessionProvider>
  );
};

const CheckoutContent: React.FC = () => {
  const { data: session, status } = useSession();
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);

  React.useEffect(() => {
    const fetchCartItems = async () => {
      if (session?.user?.email) {
        const response = await fetch('/api/cart');
        const data = await response.json();
        setCartItems(data);
      }
    };

    fetchCartItems();
  }, [session]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    // Handle unauthorized access, e.g., redirect to login page
    return <div>Unauthorized</div>;
  }

  return (
    <div>
      <Checkout cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
};

export default CheckoutPage;
