import { products } from "@/lib/products";

const ShopHeader = () => {
  const totalProducts = products.length
  return (
    <div className="bg-[#F3EEE4] w-full min-h-60 py-8">
      <div className="wrapper">
        <p>Home / shop</p>
        <h3 className="mt-8 mb-3">
          Everyday essentials, thoughtfully chosen.
        </h3>
        <p className="flex-between">
          <span>From signature Panjabi to your favourite attar. Discover a collection
          rooted in meaning.</span>
          <span>{totalProducts} essentials</span>
        </p>
      </div>
    </div>
  );
};

export default ShopHeader;
