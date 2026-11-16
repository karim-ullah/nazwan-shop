import CommonBanner from "./commonBanner";
import Hero1 from "@/assets/hero-1.png"

const Panjabi = () => {
    const heroOne = Hero1
    const subHeading = "Nazwan Collections/01"
    const heading = "Panjabi"
    const paragraph = "TIMELESS COTTON. THOUGHTFUL PAIRINGS."
    const href = '/'
    return ( 
        <CommonBanner link={heroOne} subHeading={subHeading} heading={heading} paragraph={paragraph} href={href}  />
     );
}
 
export default Panjabi;