//src/app/components/forms/SignInForm.tsx

'use client';

import Image from 'next/legacy/image';
import { fonts } from '@/app/utils/fonts';
import Link from 'next/link';
import Button from '../ui/Button';
import InputField from '../ui/InputField';
import { ChangeEvent, FormEvent, useState } from 'react';
import { validateEmail, validatePassword } from '@/app/utils/formValidation';
import { signIn } from 'next-auth/react';

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError(validateEmail(e.target.value));
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordError(validatePassword(e.target.value));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let hasError = false;

    if (email === '') {
      setEmailError('Email field is required');
      hasError = true;
    } else if (emailError !== '') {
      hasError = true;
    } else {
      setEmailError('');
    }

    if (password === '') {
      setPasswordError('Password field is required');
      hasError = true;
    } else if (passwordError !== '') {
      hasError = true;
    } else {
      setPasswordError('');
    }

    if (!hasError) {
      try {
        const result = await signIn('credentials', {
          redirect: false,
          email,
          password,
        });

        if (result?.ok) {
          // Sign-in successful, redirect to home page
          window.location.href = '/';
        } else {
          // Handle sign-in error
          console.error('Sign-in failed');
        }
      } catch (error) {
        console.error('Error during sign-in:', error);
      }
    }
  };

  return (
    <div className="flex w-full">
      <div className="md:w-1/2 flex ites-center justify-center">
        <div className="relative hidden md:block w-full h-full">
          <Image
            src="/women-1.jpg"
            alt="Women Clothes Picture"
            layout="fill"
            priority={true}
          />
        </div>
      </div>
      <form
        className={` ${fonts.inter} font-sans md:w-1/2 w-full flex-col justify-center items-center gap-6 inline-flex p-10`}
        onSubmit={handleSubmit}
      >
        <p className="text-3xl font-semibold w-2/3">Sign In</p>
        <button className="px-5 w-2/3 py-4 rounded-lg border border-neutral-700 justify-center items-center gap-3 inline-flex hover:bg-gray-100">
          <Image
            src="/GoogleLogo.svg"
            alt="Google Icon"
            width={20}
            height={20}
            priority={false}
          />
          Continue With Google
        </button>
        <div className="flex items-center w-2/3">
          <hr className="w-full border-gray-300" />
          <span className="mx-4 text-gray-400">OR</span>
          <hr className="w-full border-gray-300" />
        </div>
        <div className="w-2/3">
          <InputField
            type="email"
            label="User name or email address"
            value={email}
            onChange={handleEmailChange}
            errorMessage={emailError}
            required
          />
        </div>
        <div className="w-2/3">
          <button
            type="button"
            className="opacity-60 float-right"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
          <InputField
            type={showPassword ? 'text' : 'password'}
            label="Password"
            value={password}
            onChange={handlePasswordChange}
            errorMessage={passwordError}
            required
          />
          <Link
            href="/auth/password-reset"
            className="mt-1 text-purple-600 float-right text-right hover:text-purple-800"
          >
            Forgot my password
          </Link>
        </div>
        <div className="w-2/3">
          <Button className="w-1/3">Sign In</Button>
          <p className="text-gray-600 mt-2">
            Don't have an account?{' '}
            <Link
              href="/auth/signup"
              className="text-purple-600 underline hover:text-purple-800"
            >
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
