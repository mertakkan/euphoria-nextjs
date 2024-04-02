'use client';
import NewPasswordForm from '@/app/components/forms/NewPasswordForm';

export default function NewPasswordPage() {
  return (
    <main className="flex items-center justify-center bg-blue-100 h-screen">
      <div className="w-full h-full bg-white shadow-md flex">
        <NewPasswordForm />
      </div>
    </main>
  );
}
