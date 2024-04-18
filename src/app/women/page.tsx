import ProductFilter from '../components/ui/ProductFilter';
import WomenClothing from '../components/ui/WomenClothing';

export default function womenPage() {
  return (
    <main>
      <div className="flex">
        <ProductFilter />
        <WomenClothing />
      </div>
    </main>
  );
}
