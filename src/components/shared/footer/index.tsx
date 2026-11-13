const Footer = () => {
    return ( 
        <footer className="w-full border-t py-5">
            <div className="wrapper flex-center">
                <p className="text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Nazwan Shop. All rights reserved.
                </p>
            </div>
        </footer>
     );
}
 
export default Footer;