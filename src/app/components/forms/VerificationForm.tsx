import Image from 'next/image';
import { fonts } from '@/app/utils/fonts';
import Link from 'next/link';
import Button from '../ui/Button';

export default function VerificationForm() {
  return (
    <div className="flex w-full">
      <div className="md:w-1/2 flex ites-center justify-center">
        <div className="relative hidden md:block w-full h-full">
          <Image src="/women-8.jpg" alt="Women Clothes Picture" layout="fill" />
        </div>
      </div>
      <form
        className={` ${fonts.inter} font-sans md:w-1/2 w-full flex-col justify-center items-center gap-6 inline-flex p-10`}
      >
        <p className="text-3xl font-semibold w-2/3">Verification</p>
        <p className="w-2/3 text-md">Verify your code.</p>
        <div className="w-2/3">
          <p className="mb-1">Verification Code</p>
          <input
            type="text"
            placeholder="1234"
            className="w-full px-5 py-4 rounded-lg text-sm font-light border border-neutral-700"
          />
        </div>
        <div className="w-2/3">
          <Button className="w-1/3">Verify Code</Button>
        </div>
      </form>
    </div>
  );
}
