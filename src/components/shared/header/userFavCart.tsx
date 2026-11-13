import { Button } from "@/components/ui/button";
import { HeartIcon, ShoppingCart, UserIcon } from "lucide-react";
import Link from "next/link";

const UserFavCart = () => {
    return ( 
        <div className="flex">
          <Button className={'hidden lg:block'} asChild variant="ghost" size="lg">
            <Link href="/sign-in">
              <UserIcon size={40} />
            </Link>
          </Button>
          <Button className={'hidden lg:block'} asChild variant="ghost" size="lg">
            <Link href="/favorites">
              <HeartIcon size={40} />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <Link href="/cart">
              <ShoppingCart size={40} />
            </Link>
          </Button>
        </div>
     );
}
 
export default UserFavCart;