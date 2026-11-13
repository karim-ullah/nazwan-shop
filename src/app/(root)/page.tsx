import HeroCarousel from "@/components/homepage/hero/heroBanner";
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
     </div>
  );
}
