"use client";
import { productType } from "@/types";
import Image from "next/image";
import { Button } from "../ui/button";
import { BangladeshiTakaIcon, MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

const CartItemProductCard = ({ product }: { product: productType }) => {
  const [qty, setQty] = useState<number>(1);
  return (
    <div className="mt-5 flex items-stretch justify-between gap-5">
      {/* image and name */}

      <div className="flex flex-1 items-stretch gap-5">
        <div className="relative w-[118px] h-[144px] shrink-0 overflow-hidden rounded-md flex-1.5">
          <Image
            src={Object.values(product.images)[0]}
            fill
            alt={product.name}
            className="object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col items-start py-5">
          <div>
            <h5>{product.name}</h5>
            <p>Black / Size: M</p>
          </div>
          <div className="mt-auto">
            <span>Remove</span>
          </div>
        </div>
      </div>

      {/* qty and total */}

      <div className="flex-between flex-1">
        <div>
          <Button
            variant={"outline"}
            className={"flex justify-center items-center gap-6"}
          >
            <span
              onClick={() => setQty((prev) => Math.max(1, prev - 1))}
              className="cursor-pointer"
            >
              <MinusIcon />
            </span>
            <span>{qty}</span>
            <span onClick={() => setQty(qty + 1)} className="cursor-pointer">
              <PlusIcon />
            </span>
          </Button>
        </div>
        <div>
          <h5 className="flex justify-center items-center">
            <BangladeshiTakaIcon size={18} /> {product.price.toFixed(2)}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CartItemProductCard;
