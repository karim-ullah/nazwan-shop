import { Button } from "@/components/ui/button";
import { HeartIcon, ShoppingCart, UserIcon } from "lucide-react";
import Link from "next/link";

const UserFavCart = () => {
    return ( 
        <div>
          <Button asChild variant="ghost">
            <Link href="/sign-in">
              <UserIcon size={28} />
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/favorites">
              <HeartIcon size={28} />
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/cart">
              <ShoppingCart size={28} />
            </Link>
          </Button>
        </div>
     );
}
 
export default UserFavCart;