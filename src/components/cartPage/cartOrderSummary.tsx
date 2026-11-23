import { productsType } from "@/types";
import { Button } from "../ui/button";
import Link from "next/link";

const CartOrderSummary = ({ cartItems }: { cartItems: productsType }) => {
  const totalPrice = cartItems
    .slice(0, 2)
    .reduce((total, item) => total + item.price, 0);

  return (
    <div className="bg-[#F3EEE4] p-8 rounded-2xl">
      <h3 className="font-cormorantGaramond text-[28px]">Order Summary</h3>
      <div className="flex-between mt-6">
        <p>Subtotal ({cartItems.length} items)</p>
        <h5>{totalPrice.toFixed(2)}</h5>
      </div>
      <div className="flex-between mt-6 pb-6 border-b">
        <p>Delivery</p>
        <h5>Free</h5>
      </div>
      <div className="flex-between mt-6">
        <h3 className="h3-bold">Total</h3>
        <h5>{totalPrice.toFixed(2)}</h5>
      </div>

      <p className="text-sm! mb-6">Taxes included. No hidden charges.</p>

      <Link href={'/checkout'}>
        <Button className={'w-full cursor-pointer'}>Continue to checkout</Button>
      </Link>
    </div>
  );
};

export default CartOrderSummary;
