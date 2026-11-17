import { bannerFourData } from "@/lib/bannerData";
import CommonBanner from "./commonBanner";
import CollectionsFour from "./products/CollectionsFour";

const CollectionBannerFour = () => {
    return ( 
        <div>

            <CommonBanner {...bannerFourData}/>
            <CollectionsFour/>
        </div>
     );
}
 
export default CollectionBannerFour;