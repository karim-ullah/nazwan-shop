"use client";
import { BangladeshiTaka, DotIcon, MinusIcon, PlusIcon } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { FieldLabel } from "../ui/field";
import { useState } from "react";
import { Button } from "../ui/button";
import { addItemToCart } from "@/lib/actions/cart.actions";
import { useRouter } from "next/navigation";
import { productType } from "@/types";

const RightDetails = ({ product }: {product: productType}) => {
  const router = useRouter();

  const [selected, setSelected] = useState(`${product.colors[0]}`);
  const [selectedSize, setSelectedSize] = useState(`${product.sizes[0]}`);
  const [qty, setQty] = useState(1);

  const cartProduct = {
    id: product.id,
    name: product.name,
    price: product.price,
    src: Object.values(product.images)[0],
  };

  const handleAddToCart = async () => {
    const res = await addItemToCart(cartProduct);
    if (res.success) {
      router.push("/cart");
    }
    alert(`${res.message} ${product.name}`);
    console.log(res.cartItems);
  };

  return (
    <div className="pr-0 md:pr-12">
      <p className="uppercase">THE SIGNATURE COLLECTION</p>
      <h3 className="mt-5">{product?.name}</h3>
      <span className="text-foreground font-medium text-[28px] font-inter flex items-center my-5">
        <BangladeshiTaka size={20} />
        {product.instock ? (
          product?.price.toFixed(2)
        ) : (
          <span className="text-sm">Out of Stock</span>
        )}
      </span>
      <p className="border-b pb-5">
        Quiet elegance, made for every day. Breathable premium cotton, delicate
        embroidery and a beautifully tailored regular fit.
      </p>

      {/* Colors Area */}

      <h4 className="pt-5">Color: {selected}</h4>

      <div className="mt-5">
        <div className="flex gap-4 items-center">
          {product?.colors.map((color, index) => (
            <div key={index} className="flex gap-2 items-center cursor-pointer capitalize">
              <Checkbox
                checked={selected === color}
                onCheckedChange={() => setSelected(color)}
                id={color}
                name={color}
              />
              <FieldLabel htmlFor={color} className="font-normal">
                {color}
              </FieldLabel>
            </div>
          ))}
        </div>
      </div>

      {/* Sizes Area */}

      <h4 className="pt-5">Size: {selectedSize}</h4>
      <div className="mt-5 space-x-4">
        {product.sizes.map((size, index) => (
          <Button
            key={index}
            className={"cursor-pointer capitalize"}
            variant={`${selectedSize !== size ? "outline" : ""}`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </Button>
        ))}
      </div>

      {/* order item and add-to-cart area */}
      <div className="flex gap-4 mt-8">
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
        <Button
          onClick={handleAddToCart}
          className={"flex-1 cursor-pointer"}
          disabled={product.instock ? false : true}
        >
          Add To Cart
        </Button>
      </div>
      {/* Buy now button */}
      <div className="flex">
        <Button
          variant={"outline"}
          disabled={product.instock ? false : true}
          className={"w-full mt-3"}
        >
          Buy Now
        </Button>
      </div>

      <div>
        <p className="flex items-center gap-2 font-inter font-medium mt-3">
          {" "}
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          {product.instock ? "In stock - ready to ship" : "Out of Stock"}
        </p>
        <p className="my-1">
          Delivery in 2–4 business days · Cash on delivery available
        </p>
        <p>Easy 7-day exchanges / Secure checkout</p>
      </div>
    </div>
  );
};

export default RightDetails;
