
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/../public/logo.png";
import SearchNavigation from "./searchNavigation";
import UserFavCart from "./userFavCart";

const Header = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Panjabi", href: "/panjabi" },
    { label: "Jubba", href: "/jubba" },
    { label: "Attar", href: "/attar" },
    { label: "Tupi", href: "/tupi" },
    { label: "Essentials", href: "/essentials" },
  ];
  return (
    <header className="w-full border-b py-3">
      <div className="wrapper flex-between">
        {/* logo */}
        <div>
            <Link href="/">
              <Image src={Logo} alt={APP_NAME} width={110} height={84} />
            </Link>
        </div>
        {/* search and navigation */}
       <SearchNavigation navItems={navItems} />
        {/* user, favorites, cart */}
        <UserFavCart />
      </div>
    </header>
  );
};

export default Header;
