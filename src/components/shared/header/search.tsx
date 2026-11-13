import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div>
      <InputGroup className="w-full lg:w-[400px] h-11 bg-[#F3EEE4] rounded-md px-2">
        <InputGroupInput
          className="input:placeholder:font-inter font-regular text-sm"
          placeholder="Search products and more..."
        />
        <InputGroupAddon align="inline-end">
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default Search;
