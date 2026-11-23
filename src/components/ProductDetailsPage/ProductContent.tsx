import { products } from "@/lib/products";
import Image from "next/image";

type productDetailsProps = {
  params: Promise<{
    id: string
  }>
}

import RightDetails from "./RightDetails";
import Link from "next/link";
const ProductContent = async ({ params }: productDetailsProps) => {
  const { id } = await params;
  const product = products.find((item) => String(item.id) == id);


  
  return (
    <div>
      <p><Link href={'/'}>Home</Link> / Panjabi / Signature Ivory Panjabi</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-10">
        {/* Left */}
        <div className="relative w-full h-full aspect-square">
          {product?.images && (
            <Image
              src={product.images[product.colors[0]]}
              fill
              priority
              alt={product?.name}
              className="object-cover"
            />
          )}
        </div>
        {/* Right */}

        <RightDetails product={product}/>
      </div>

      <div>
        <h3 className="h3-bold">Description</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo facilis aliquid, et non ad impedit ab! Culpa praesentium illum tempore in quae! Molestias rerum, quis pariatur nemo nulla repellat nobis cum odio dolorum, impedit officiis hic temporibus itaque veritatis? Eius minus debitis quo accusamus, veritatis culpa id? Consequuntur, obcaecati ipsa.
        </p>
      </div>
    </div>
  );
};

export default ProductContent;
