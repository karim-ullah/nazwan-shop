'use client';
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { SearchIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SearchNavigation = ({navItems}) => {
    const pathName = usePathname();
    return ( 
         <div className="flex flex-col items-center gap-7">
          {/* search bar */}
          <div>
            <InputGroup className="w-[400px] h-11 bg-[#F3EEE4] rounded-md px-2">
              <InputGroupInput className="input:placeholder:font-inter font-regular text-sm" placeholder="Search products and more..." />
              <InputGroupAddon align="inline-end">
                <SearchIcon />
              </InputGroupAddon>
            </InputGroup>
          </div>

          {/* navigation */}
          <div>
            <nav>
              <ul className={`flex gap-8 text-sm font-inter`}>
                {navItems.map((item) => (
                  <li key={item.href} asChild className={pathName === item.href ? "font-semibold" : "font-regular"}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
     );
}
 
export default SearchNavigation;