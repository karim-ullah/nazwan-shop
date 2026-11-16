import ProductCard from "@/components/shared/productCard/ProductCard";
import { products } from "@/lib/products";

const PanjabiCollections = () => {
    const collections = products
    return ( 
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
            {
                collections.map((product, index)=> <ProductCard key={index} src={product.src} productName={product.ProductName} shortDesc={product.shortDesc} price={product.price} ratings={product.ratings}/>)
            }
        </section>
     );
}
 
export default PanjabiCollections;