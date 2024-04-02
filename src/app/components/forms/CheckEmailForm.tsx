import Image from 'next/image';
import { fonts } from '@/app/utils/fonts';
import Link from 'next/link';

export default function CheckEmailForm() {
  return (
    <div className="flex w-full">
      <div className="md:w-1/2 flex ites-center justify-center">
        <div className="relative hidden md:block w-full h-full">
          <Image src="/women-4.jpg" alt="Women Clothes Picture" layout="fill" />
        </div>
      </div>
      <form
        className={` ${fonts.inter} font-sans md:w-1/2 w-full flex-col justify-center items-center gap-6 inline-flex p-10`}
      >
        <p className="text-3xl font-semibold w-full">Check Email</p>
        <p className="mt-2 w-full text-lg">
          Please check your email inbox and click on the provided link to reset
          your password . If you don't receive email,{' '}
          <button className="text-blue-600">Click here to resend.</button>
        </p>

        <div className="w-full">
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
