import VerificationForm from '@/app/components/forms/VerificationForm';

export default function VerificationPage() {
  return (
    <main className="flex items-center justify-center bg-blue-100 h-screen">
      <div className="w-full h-full bg-white shadow-md flex">
        <VerificationForm />
      </div>
    </main>
  );
}
