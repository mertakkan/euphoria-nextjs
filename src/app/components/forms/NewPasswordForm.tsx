import { FormEvent, useState } from 'react';
import Image from "next/legacy/image";
import { fonts } from '@/app/utils/fonts';
import Link from 'next/link';
import Button from '../ui/Button';
import InputField from '../ui/InputField';
import { validatePassword } from '@/app/utils/formValidation';

export default function NewPasswordForm() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const passwordErrors = [];

    if (password !== confirmPassword) {
      passwordErrors.push('Passwords do not match');
    }

    const passwordValidationError = validatePassword(password);
    if (passwordValidationError) {
      passwordErrors.push(passwordValidationError);
    }

    if (passwordErrors.length > 0) {
      setErrorMessage(passwordErrors.join('\n'));
    } else {
      // Password is valid, perform further actions (e.g., submit the form)
      setErrorMessage('');
      console.log('Form sent');
    }
  };
  return (
    <div className="flex w-full">
      <div className="md:w-1/2 flex ites-center justify-center">
        <div className="relative hidden md:block w-full h-full">
          <Image src="/women-7.jpg" alt="Women Clothes Picture" layout="fill" />
        </div>
      </div>
      <form
        className={` ${fonts.inter} font-sans md:w-1/2 w-full flex-col justify-center items-center gap-6 inline-flex p-10`}
        onSubmit={handleSubmit}
      >
        <p className="text-3xl font-semibold w-2/3">Create New Password</p>
        <p className="mt-2 w-2/3 text-md">
          Your new password must be different from previous used passwords.
        </p>
        <div className="w-2/3">
          <InputField
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="thomas@gmail.com"
            required
          />
        </div>
        <div className="w-2/3">
          <InputField
            type="password"
            label="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="thomas@gmail.com"
            required
          />
        </div>
        {errorMessage && (
          <pre className={`${fonts.inter} text-red-500 w-2/3`}>
            {errorMessage}
          </pre>
        )}
        <div className="w-2/3">
          <Button className="w-1/3">Send</Button>
        </div>
      </form>
    </div>
  );
}
