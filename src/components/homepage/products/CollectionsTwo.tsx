import ProductCard from "@/components/shared/productCard/ProductCard";
import { products } from "@/lib/products";

const CollectionsTwo = () => {
  const collections = products;
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
      {collections.reverse().map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </section>
  );
};

export default CollectionsTwo;
