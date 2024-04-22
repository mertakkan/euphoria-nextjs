//src\app\api\cart\[itemId]\route.ts

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function PUT(
  request: NextRequest,
  { params }: { params: { itemId: string } }
) {
  const session = await getServerSession(authOptions);
  const { quantity } = await request.json();

  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const cartItem = await prisma.cartItem.update({
    where: { id: params.itemId },
    data: { quantity },
  });

  return NextResponse.json(cartItem);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { itemId: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await prisma.cartItem.delete({
    where: { id: params.itemId },
  });

  return NextResponse.json({ message: 'Item removed from cart' });
}
