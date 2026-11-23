
import CartOrderSummary from "@/components/cartPage/cartOrderSummary";
import CartPageHeader from "@/components/cartPage/cartPageHeader";
import CartProductList from "@/components/cartPage/cartProductList";
import { products } from "@/lib/products";

const CartPage = () => {
    const cartItems = products
    return ( 
        <div className="wrapper my-8">
            <CartPageHeader/>
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10">
                <CartProductList cartItems={cartItems}/>
                <CartOrderSummary cartItems= {cartItems}/>
            </div>
        </div>
     );
}
 
export default CartPage;