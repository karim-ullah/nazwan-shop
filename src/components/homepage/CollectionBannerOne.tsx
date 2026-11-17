import { bannerOneData } from "@/lib/bannerData";
import CommonBanner from "./commonBanner";
// import Hero1 from "@/assets/hero-1.png"

const CollectionBannerOne = () => {
    const bannerData = bannerOneData
    // const heroOne = Hero1
    // const subHeading = "Nazwan Collections/01"
    // const heading = "Panjabi"
    // const paragraph = "TIMELESS COTTON. THOUGHTFUL PAIRINGS."
    // const href = '/'
    return ( 
        <CommonBanner {...bannerData}  />
     );
}
 
export default CollectionBannerOne;