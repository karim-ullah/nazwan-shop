import ShopHeader from "@/components/shoppage/shopHeader";
import ShopPageBody from "@/components/shoppage/shoppagebody";

export const metadata = {
  title: "Shop",
  description: "Welcome to Nazwan Shop",
};

const ShopPage = () => {
  return (
    <section>
      <ShopHeader />

      <main className="wrapper">
        <ShopPageBody />
      </main>
    </section>
  );
};

export default ShopPage;
