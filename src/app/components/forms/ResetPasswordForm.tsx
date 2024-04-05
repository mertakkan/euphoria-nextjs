'use client';

import Image from 'next/legacy/image';
import { fonts } from '@/app/utils/fonts';
import Link from 'next/link';
import { Button } from '../ui/button';
import InputField from '../ui/InputField';
import { FormEvent, useState } from 'react';

export default function ResetPasswordForm() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === '') {
      setErrorMessage('Email field is required');
      return;
    }

    // Email is valid, perform further actions (e.g., submit the form)
    setErrorMessage('');
    console.log('Form sent');
  };

  return (
    <div className="flex w-full">
      <div className="md:w-1/2 flex ites-center justify-center">
        <div className="relative hidden md:block w-full h-full">
          <Image src="/women-3.jpg" alt="Women Clothes Picture" layout="fill" />
        </div>
      </div>
      <form
        className={` ${fonts.inter} font-sans md:w-1/2 w-full flex-col justify-center items-center gap-6 inline-flex p-10`}
        onSubmit={handleSubmit}
      >
        <p className="text-3xl font-semibold w-2/3">Reset Your Password</p>
        <p className="mt-2 w-2/3 text-md">
          Enter your email and we'll send you a link to reset your password.{' '}
          <br></br> Please check it.
        </p>
        <div className="w-2/3">
          <InputField
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="thomas@gmail.com"
            errorMessage={errorMessage}
            required
          />
        </div>
        <div className="w-2/3">
          <Button>Reset</Button>
          <p className="text-gray-600 mt-2">
            Back to{' '}
            <Link
              href="/auth/signin"
              className="text-purple-600 underline hover:text-purple-800"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
