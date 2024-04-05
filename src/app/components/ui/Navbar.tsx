//src/app/components/ui/Navbar
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { fonts } from '@/app/utils/fonts';
import { Button } from './button';
import { signOut, useSession, SessionProvider } from 'next-auth/react';

export default function Navbar() {
  return (
    <SessionProvider>
      <NavbarContent />
    </SessionProvider>
  );
}

function NavbarContent() {
  const { data: session } = useSession();
  const isLoggedIn = !!session;

  const handleSignOut = () => {
    signOut({ callbackUrl: '/' }); // Redirect to the home page after sign-out
  };

  return (
    <nav className={`${fonts.inter} font-sans bg-white shadow-md`}>
      <div className="w-4/5 mx-auto p-2 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/Logo.svg"
                alt="Euphoria Logo"
                width={110}
                height={50}
              />
            </Link>
          </div>
          <div className="hidden items-center sm:ml-6 sm:flex sm:space-x-8">
            <Link
              href="/shop"
              className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-md font-medium"
            >
              Shop
            </Link>
            <Link
              href="/men"
              className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-md font-medium"
            >
              Men
            </Link>
            <Link
              href="/women"
              className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-md font-medium"
            >
              Women
            </Link>
            <Link
              href="/combos"
              className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-md font-medium"
            >
              Combos
            </Link>
            <Link
              href="/joggers"
              className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-md font-medium"
            >
              Joggers
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 pr-8 rounded-lg border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button className="absolute inset-y-0 right-0 flex items-center pr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            {isLoggedIn ? (
              <div className="ml-4">
                <button
                  className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="ml-4 w-full">
                <Link href="/auth/signin">
                  <Button>Sign In</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <hr className=" "></hr>
    </nav>
  );
}
