import ProductCard from "@/components/shared/productCard/ProductCard";
import { products } from "@/lib/products";

const CollectionsFour = () => {
    return ( 
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
            {
                products.reverse().map((product, index)=> <ProductCard {...product}/> )
            }
        </section>
     );
}
 
export default CollectionsFour;