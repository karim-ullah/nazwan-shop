'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMenu = ({navItems}) => {
    const pathName = usePathname();
    return ( 
        <div>
            <nav>
              <ul className={`flex-center gap-8 text-sm font-inter`}>
                {navItems.map((item) => (
                  <li key={item.href} asChild className={pathName === item.href ? "font-semibold" : "font-regular"}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
     );
}
 
export default NavMenu;