//src/app/components/forms/SignUpForm.tsx

'use client';
import Image from 'next/legacy/image';
import { fonts } from '@/app/utils/fonts';
import { useState, FormEvent, ChangeEvent } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';
import InputField from '../ui/InputField';
import { validateEmail, validatePassword } from '@/app/utils/formValidation';

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
  };

  return (
    <div className="flex w-full">
      <div className="md:w-1/2 flex ites-center justify-center">
        <div className="relative hidden md:block w-full h-full">
          <Image
            src="/women-2.jpg"
            alt="Group of young people"
            layout="fill"
            priority={true}
          />
        </div>
      </div>
      <form
        className={`${fonts.inter} font-sans md:w-1/2 w-full flex-col justify-center items-center gap-6 inline-flex p-10`}
        onSubmit={handleSubmit}
      >
        <div className="w-2/3">
          <p className="text-3xl font-semibold w-2/3">Sign Up</p>
          <p className="mt-2 w-full text-sm">
            Sign up for free to order any of our products.
          </p>
        </div>
        <button className="px-5 w-2/3 py-4 rounded-lg border border-neutral-700 justify-center items-center gap-3 inline-flex hover:bg-gray-100">
          <Image
            src="/GoogleLogo.svg"
            alt="Google Icon"
            width={20}
            height={20}
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
            label="Email Address"
            value={email}
            onChange={handleEmailChange}
            placeholder="thomas@gmail.com"
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
        </div>
        <div className="w-2/3 mt-4">
          <div className="flex items-center">
            <input type="checkbox" id="terms" className="mr-2" required />
            <label htmlFor="terms" className="text-gray-700">
              Agree to our{' '}
              <a href="#" className="text-purple-600 hover:text-purple-800">
                Terms of use
              </a>{' '}
              and{' '}
              <a href="#" className="text-purple-600 hover:text-purple-800">
                Privacy Policy
              </a>
            </label>
          </div>
          <div className="flex items-center mt-2">
            <input type="checkbox" id="newsletter" className="mr-2" />
            <label htmlFor="newsletter" className="text-gray-700">
              Subscribe to our monthly newsletter
            </label>
          </div>
        </div>
        <div className="w-2/3">
          <Button className="w-1/3">Sign Up</Button>
          <p className="text-gray-600 mt-2">
            Already have an account?{' '}
            <Link
              href="/auth/signin"
              className="text-purple-600 underline hover:text-purple-800"
            >
              Log in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
