// src/app/api/cart/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { clothes as womenClothes } from '@/app/components/ui/WomenClothing';
import { clothes as menClothes } from '@/app/components/ui/MenClothing';

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  const { productId, quantity } = await request.json();

  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  let cart = await prisma.cart.upsert({
    where: { userId: user.id },
    update: {},
    create: { userId: user.id },
    include: { items: true },
  });

  if (!cart) {
    cart = await prisma.cart.create({
      data: { userId: user.id },
      include: { items: true },
    });
  }

  // Find the product based on the productId
  const product =
    womenClothes.find((cloth) => cloth.id === productId) ||
    menClothes.find((cloth) => cloth.id === productId);

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  const cartItem = await prisma.cartItem.create({
    data: {
      cartId: cart.id,
      productId,
      title: product.title,
      image: product.image,
      quantity,
    },
  });

  return NextResponse.json(cartItem);
}
