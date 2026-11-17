import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CommonBanner = ({ src, subHeading, heading, paragraph, href }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#F2EBDF]">
      <div className="relative min-h-[280px] md:min-h-full">
        <Image
          src={src}
          fill
          priority
          className="object-cover [mask-image:linear-gradient(to_right,black_65%,transparent_100%)]"
          alt="Banner Image"
        />
      </div>
      <div className="py-6 px-6 md:py-8 md:pl-0 md:pr-10 flex flex-col items-start justify-center">
        <h4 className="h4-banner">{subHeading}</h4>
        <h1 className="h1-semi-bold">{heading}</h1>
        <p className="mb-8 uppercase">{paragraph}</p>
        <Link href={href}>
          <Button className={'space-x-2'}>Explore Collections <ArrowRight/></Button>
        </Link>
      </div>
    </section>
  );
};

export default CommonBanner;
