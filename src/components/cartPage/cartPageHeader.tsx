import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CartPageHeader = () => {
  return (
    <div>
      <p>
        <Link href={"/"}>Home</Link> / Cart
      </p>
      <div className="flex-between mt-6">
        <div>
          <h3 className="mb-1 font-cormorantGaramond">Your Bag</h3>
          <p>2 thoughtfully chosen essentials</p>
        </div>
        <div>
          <Link href={"/shop"}>
            
            <p className="flex gap-1 items-center">Continue shopping <ArrowRight size={14}/></p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPageHeader;
