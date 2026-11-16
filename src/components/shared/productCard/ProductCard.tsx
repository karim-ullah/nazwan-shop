import Image from "next/image";

const ProductCard = ({ src, productName, shortDesc, price, ratings }) => {
  return (
    <div className="cursor-pointer group overflow-hidden">
      <div className="relative overflow-hidden max-w-[310px] min-h-[340px]">
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
        <h5>{price}</h5>
        <p>{ratings}</p>
      </div>
    </div>
  );
};

export default ProductCard;
