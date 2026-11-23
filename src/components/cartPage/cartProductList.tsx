import { productsType } from "@/types";
import CartItemProductCard from "./cartItemProductCard";

const CartProductList = ({ cartItems }: { cartItems: productsType }) => {
  return (
    <div className="mt-8">
      <div className="flex-between uppercase font-medium text-sm pb-3 border-b">
        <p className="flex-1">Product</p>
        <div className="flex-between flex-1">
          <p>Quantity</p>
          <p>Total</p>
        </div>
      </div>
      <div>
        {cartItems.slice(0, 2).map((product) => (
          <CartItemProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CartProductList;
