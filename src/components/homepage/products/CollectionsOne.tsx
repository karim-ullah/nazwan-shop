import ProductCard from "@/components/shared/productCard/ProductCard";
import { products } from "@/lib/products";

const CollectionsOne = () => {
    
    return ( 
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
            {
                products.map((product, index)=> <ProductCard key={index} product ={product}/>)
            }
        </section>
     );
}
  
export default CollectionsOne;