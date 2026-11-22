import Panjabi1 from "@/assets/panjabi-1.png";
import Panajbi2 from "@/assets/panjabi-2.png";
import Panajbi3 from "@/assets/panjabi-3.png";
import Panajbi4 from "@/assets/panjabi-4.png";
import { productsType } from "@/types";
export const products: productsType = [
  {
    id: 1,
    images: {
      black: Panjabi1,
    },
    name: "Signature Ivory Panjabi",
    shortDesccription: "Premium cotton • Ivory",
    description: "A premium cotton Panjabi with a comfortable fit and elegant ivory color.",
    price: 499,
    colors: ["black", "red", "blue", "green"],
    sizes: ["M", "L", "XL", "XXL"],
    ratings: 5.00,
    instock: true
  },
  {
    id: 2,
    images: {
      black: Panajbi2,
    },
    name: "Sage Classic Jubba",
    shortDesccription: "Soft-touch cotton • Sage",
    description: "A classic Jubba made with soft-touch cotton for everyday comfort.",
    price: 3200,
    colors: ["black", "red", "blue", "green"],
    sizes: ["M", "L", "XL", "XXL"],
    ratings: 4.7,
    instock: true,
  },
  {
    id: 3,
    images: {
      black: Panajbi3,
    },
    name: "Embroidered Ivory Tupi",
    shortDesccription: "Hand-finished • Ivory",
    description: "An elegant ivory Tupi featuring detailed hand-finished embroidery.",
    price: 450,
    colors: ["black", "red", "blue", "green"],
    sizes: ["M", "L", "XL", "XXL"],
    ratings: 4.9,
    instock: true
  },
  {
    id: 4,
    images: {
      black: Panajbi4,
    },
    name: "Classic Leather Watch",
    shortDesccription: "Genuine leather • Walnut",
    description: "A timeless leather watch with a classic walnut-colored design.",
    price: 2800,
    colors: ["black", "red", "blue", "green"],
    sizes: ["M", "L", "XL", "XXL"],
    // ratings: 4.8,
    instokc: false,
  },
];



export const cartItems = []
