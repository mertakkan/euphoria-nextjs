// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '@/app/lib/prisma';
import bcrypt from 'bcryptjs';
import { SessionStrategy } from 'next-auth';

export const authOptions = {
  session: {
    // Set to jwt in order to CredentialsProvider works properly
    strategy: 'jwt' as SessionStrategy,
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email) {
          throw new Error('Email is required');
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) {
          throw new Error('No user found with the provided email');
        }

        const isPasswordValid = await bcrypt.compare(
          credentials?.password ?? '',
          user.password
        );

        if (!isPasswordValid) {
          throw new Error('Invalid password');
        }

        return user;
      },
    }),
  ],

  pages: {
    signIn: '/auth/signin',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
