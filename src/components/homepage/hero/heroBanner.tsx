import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Hero1 from "@/assets/hero-1.png";
import Hero2 from "@/assets/hero-2.jpg";
const HeroCarousel = () => {
  const heroImages = [Hero1, Hero2];
  return (
    <Carousel className="bg-gray-200 w-full mt-6">
      <CarouselContent>
        {heroImages.map((image, index) => (
          <CarouselItem>
            <div
              className="bg-cover bg-center bg-no-repeat w-full h-40 lg:h-96"
              style={{ backgroundImage: `url(${image.src})` }}
            ></div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  );
};

export default HeroCarousel;
