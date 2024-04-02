//src/app/auth/signup/page.tsx

import SignUpForm from '@/app/components/forms/SignUpForm';

export default function SignUp() {
  return (
    <main className="flex items-center justify-center bg-blue-100 h-screen">
      <div className="w-full h-full bg-white shadow-md flex">
        <SignUpForm />
      </div>
    </main>
  );
}
