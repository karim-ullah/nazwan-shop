import ShopPageLeft from "./shopPageLeft";
import ShopPageRight from "./shopPageRight";

const ShopPageBody = () => {
    return ( 
        <div className="grid grid-cols-1 md:grid-cols-[20%_80%] gap-5 my-10">
            <ShopPageLeft/>
            <ShopPageRight/>
        </div>
     );
}
 
export default ShopPageBody;