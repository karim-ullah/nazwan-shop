import { bannerThreeData } from "@/lib/bannerData";
import CommonBanner from "./commonBanner";
import CollectionsThree from "./products/CollectionsThree";

const CollectionBannerThree = () => {
  return (
    <div>
      <CommonBanner {...bannerThreeData} />
      <CollectionsThree />
    </div>
  );
};

export default CollectionBannerThree;
