import { BangladeshiTakaIcon, StarIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";

type productCarProps = {
  src: string | StaticImageData;
  productName: string;
  shortDesc: string;
  price: number | string;
  ratings: number | string;
};

const ProductCard = ({
  src,
  productName,
  shortDesc,
  price,
  ratings,
}: productCarProps) => {
  return (
    <div className="cursor-pointer group overflow-hidden">
      <div className="relative overflow-hidden min-w-[310px] min-h-[340px]">
        <Image
          src={src}
          fill
          priority
          className="object-cover transition-transform ease-in-out duration-500 group-hover:scale-105"
          alt={productName}
        />
      </div>
      <div className="mt-4">
        <h5 className="mb-2">{productName}</h5>
        <p>{shortDesc}</p>
      </div>
      <div className="flex-between mt-3">
        <h5 className="flex justify-center items-center"><BangladeshiTakaIcon size={18}/> {price}</h5>
        <p className="flex gap-1"><StarIcon size={12}/> {ratings}</p>
      </div>
    </div>
  );
};

export default ProductCard;
