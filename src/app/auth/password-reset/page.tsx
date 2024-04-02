'use client';
import ResetPasswordForm from '@/app/components/forms/ResetPasswordForm';

export default function ResetPasswordPage() {
  return (
    <main className="flex items-center justify-center bg-blue-100 h-screen">
      <div className="w-full h-full bg-white shadow-md flex">
        <ResetPasswordForm />
      </div>
    </main>
  );
}
