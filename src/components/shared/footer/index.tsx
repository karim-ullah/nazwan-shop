import { connection } from "next/server";
const Footer = async() => {
    await connection()

    const currentYear = new Date().getFullYear();
    return ( 
        <footer className="w-full border-t py-5">
            <div className="wrapper flex-center">
                <p className="text-sm text-gray-500">
                    &copy; {currentYear} Nazwan Shop. All rights reserved.
                </p>
            </div>
        </footer>
     );
}
 
export default Footer;