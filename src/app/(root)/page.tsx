import DiscoverStory from "@/components/homepage/DiscoverStory";
import HeroCarousel from "@/components/homepage/hero/heroBanner";
import Panjabi from "@/components/homepage/panjabi";
import PanjabiCollections from "@/components/homepage/products/panjabiCollections";
import TopCategories from "@/components/homepage/TopCategoires";

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
      <Panjabi/>
      <PanjabiCollections/>
     </div>
  );
}
