"use server";

import { cartItems} from "../products";

export const addItemToCart = async (product: any, qty = 1) => {
  console.log(product, 'wanting product')

  const productId = product.id;
  // console.log(product, typeof productId)
  if (typeof productId !== "number" || qty > 1) {
    return {
      success: false,
      message: "Invalid Input",
    };
  }

  const isExist = cartItems.some(item => item.id === productId)
  if(isExist){
    return {
        success: false,
        message: 'Already added'
    }
  }


   const updateCart = [...cartItems, {...product}]
  

  console.log(updateCart)

  return {
    success: true,
    message: "Item Added to Cart",
    cartItems: updateCart,
  };
};
