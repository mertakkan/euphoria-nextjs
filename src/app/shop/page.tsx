//src\app\shop\page.tsx

import Banner from '../components/ui/Banner';
import DealCards from '../components/ui/DealCards';
import Arrivals from '../components/ui/ArrivalsCarousel';

export default function ShopPage() {
  return (
    <main>
      <Banner></Banner>
      <div className="flex justify-center">
        <DealCards />
      </div>
      <div className="flex justify-center">
        <Arrivals />
      </div>
    </main>
  );
}
