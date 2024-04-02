// src/app/api/auth/signup/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during user registration:', error);
    return NextResponse.json(
      { error: 'User registration failed' },
      { status: 500 }
    );
  }
}
