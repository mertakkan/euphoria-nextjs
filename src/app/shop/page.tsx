//src\app\shop\page.tsx

import Banner from '../components/ui/Banner';
import DealCards from '../components/ui/DealCards';
import Arrivals from '../components/ui/ArrivalsCarousel';
import SavingZone from '../components/ui/SavingZone';
import ShopLargeCard from '../components/ui/ShopLargeCard';
import Categories from '../components/ui/Categories';
import TopBrands from '../components/ui/TopBrands';
import Limelight from '../components/ui/Limelight';
import Feedback from '../components/ui/Feedback';

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
      <SavingZone />
      <div className="flex justify-center">
        <ShopLargeCard />
      </div>
      <Categories />
      <div className="m-28">
        <TopBrands />
      </div>
      <Limelight />
      <Feedback />
    </main>
  );
}
