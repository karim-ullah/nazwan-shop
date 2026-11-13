import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/../public/logo.png";
import UserFavCart from "./userFavCart";
import Search from "./search";
import NavMenu from "./navItems";

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
      <div className="wrapper flex-between flex-col gap-2">
        <div className="w-full flex-between gap-3">
          {/* logo */}
          <div className="flex shrink-0 items-center">
            <Link href="/" className="inline-flex items-center">
              <Image
                src={Logo}
                alt={`${APP_NAME} logo`}
                priority
                width={110}
                height={40}
                className="h-auto w-[60px] lg:w-[80px] object-contain"
              />
            </Link>
          </div>

          {/* search and navigation */}
          <div>
            <Search />
          </div>
          {/* user, favorites, cart */}
          <div>
            <UserFavCart />
          </div>
        </div>
        <div>
          {/* navigation */}
          <NavMenu navItems={navItems} />
        </div>
      </div>
    </header>
  );
};

export default Header;
