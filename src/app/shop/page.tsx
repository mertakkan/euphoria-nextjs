//src\app\shop\page.tsx

import Banner from '../components/ui/Banner';
import DealCards from '../components/ui/DealCards';

export default function ShopPage() {
  return (
    <main>
      <Banner></Banner>
      <div className="flex justify-center">
        <DealCards />
      </div>
    </main>
  );
}
