// src/app/components/Checkout.tsx
'use client';
import React from 'react';
import { fonts } from '@/app/utils/fonts';

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

interface CheckoutProps {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const Checkout: React.FC<CheckoutProps> = ({ cartItems, setCartItems }) => {
  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateShipping = () => {
    return 0; // Set shipping cost to 0 for free shipping
  };

  const calculateGrandTotal = () => {
    return calculateSubtotal() + calculateShipping();
  };

  const removeFromCart = async (itemId: string) => {
    await fetch(`/api/cart/${itemId}`, {
      method: 'DELETE',
    });
    // Refresh the cart items after removing an item
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const updateQuantity = async (itemId: string, quantity: number) => {
    await fetch(`/api/cart/${itemId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quantity }),
    });
    // Update the cartItems state with the new quantity
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  return (
    <div className={`${fonts.inter} container mx-auto my-10`}>
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border-b">Product Details</th>
            <th className="border-b text-center">Price</th>
            <th className="border-b text-center">Quantity</th>
            <th className="border-b text-center">Shipping</th>
            <th className="border-b text-center">Subtotal</th>
            <th className="border-b text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td className="border-b">
                <div className="flex items-center gap-8">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-24 object-cover m-10 my-4 rounded-xl"
                  />
                  <div>
                    <p className="font-bold">{item.title}</p>
                  </div>
                </div>
              </td>
              <td className="py-2 px-4 border-b text-center">
                {item.price.toFixed(1)}
              </td>
              <td className="py-2 px-4 border-b text-center">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value))
                  }
                  className="w-16 px-2 py-1 border rounded"
                />
              </td>
              <td className="py-2 px-4 border-b text-center">FREE</td>
              <td className="py-2 px-4 border-b text-center">
                {(item.price * item.quantity).toFixed(1)}
              </td>
              <td className="py-2 px-4 border-b text-center">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-800 ease-in-out transition"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-6 m-8 flex justify-end">
        <div className="flex flex-col text-right gap-3 bg-gray-200 p-4 rounded-lg">
          <p className="text-xl">Subtotal: {calculateSubtotal().toFixed(1)}</p>
          <p className="text-xl">Shipping: FREE</p>
          <p className="text-2xl font-bold">
            Grand Total: {calculateGrandTotal().toFixed(1)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
