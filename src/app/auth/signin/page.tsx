import SignInForm from '@/app/components/forms/SignInForm';

export default function SignIn() {
  return (
    <main className="flex items-center justify-center bg-blue-100 h-screen">
      <div className="w-full h-full bg-white shadow-md flex">
        <SignInForm />
      </div>
    </main>
  );
}
