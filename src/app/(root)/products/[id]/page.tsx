import ProductContent from "@/components/ProductDetailsPage/ProductContent";
import { Suspense } from "react";

const ProductDetailsPage = ({ params }: string | number) => {

  return (
    <section className="my-8">
      <Suspense
        fallback={
          <div className="container mx-auto py-10">
            Loading product details...
          </div>
        }
      >
        <ProductContent params={params} />
      </Suspense>
    </section>
  );
};

export default ProductDetailsPage;
