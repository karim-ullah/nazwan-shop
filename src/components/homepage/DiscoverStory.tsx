import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import GifPackImg from "@/assets/gift-pack.png";
const DiscoverStory = () => {
  return (
    <section className="bg-[#FFF0DB] flex-between gap-6 my-8 px-12">
      {/* left */}
      <div className="w-[20%]">
        <Image width="auto" height="auto" src={GifPackImg} alt="Image" />
      </div>

      {/* Right */}

      <div className="w-[80%] flex-around gap-28">
        <div>
          <h4 className="h4-banner">The Nazwan Way</h4>
          <h3 className="font-normal font-cormorantGaramond text-3xl">
            More than what you wear. A way of being.
          </h3>
          <p>
            Inspired by Sunnah. Designed for daily life. We bring together
            thoughtful craftsmanship, honest materials and timeless style — so
            you can carry your values with confidence.
          </p>
        </div>

        <div>
          <Button>
            Discover Our Story <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DiscoverStory;
