import DiscoverStory from "@/components/homepage/DiscoverStory";
import HeroCarousel from "@/components/homepage/hero/heroBanner";
import Panjabi from "@/components/homepage/CollectionBannerOne";
import TopCategories from "@/components/homepage/TopCategoires";
import CollectionBannerOne from "@/components/homepage/CollectionBannerOne";
import CollectionsOne from "@/components/homepage/products/CollectionsOne";
import CollectionBannerTwo from "@/components/homepage/CollectionBannerTwo";
import CollectionsTwo from "@/components/homepage/products/CollectionsTwo";
import CollectionBannerThree from "@/components/homepage/CollectionBannerThree";
import CollectionBannerFour from "@/components/homepage/CollectionBannerFour";

export const metadata = {
  title: "Home",
  description: "Welcome to Nazwan Shop",
};

export default function Home() {
  return (
    <div className="min-h-screen">

      <HeroCarousel  />
      <TopCategories />
      <DiscoverStory />
      <CollectionBannerOne/>
      <CollectionsOne/>
      <CollectionBannerTwo/>
      <CollectionsTwo/>

      {/* combind banner and collections */}
      <CollectionBannerThree/>
      <CollectionBannerFour/>
     </div>
  );
}
