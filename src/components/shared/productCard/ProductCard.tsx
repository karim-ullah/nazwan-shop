import { productType } from "@/types";
import { BangladeshiTakaIcon, StarIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: {product: productType}) => {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="cursor-pointer group overflow-hidden">
        <div className="relative overflow-hidden min-w-[310px] min-h-[340px]">
          <Image
            src={product.images[product.colors[0]]}
            fill
            priority
            className="object-cover transition-transform ease-in-out duration-500 group-hover:scale-105"
            alt={product.name}
          />
        </div>
        <div className="mt-4">
          <h5 className="mb-2">{product.name}</h5>
          <p>{product.shortDesccription}</p>
        </div>
        <div className="flex-between mt-3">
          <h5 className="flex justify-center items-center">
            <BangladeshiTakaIcon size={18} /> {product.price.toFixed(2)}
          </h5>
          <p className="flex gap-1">
            <StarIcon size={12} /> {product.ratings ? product.ratings : 'Not Rated Yet'}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
