export type productType = {
  id: string | number;
  name: string;
  shortDesccription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
  ratings?: number | string;
  instock: boolean
};

export type productsType = productType[]
