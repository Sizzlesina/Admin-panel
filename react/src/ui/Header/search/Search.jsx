import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import SearchInput from "./SearchInput";

function SearchBox() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <span className="mr-5">
      <SearchInput setShowSearch={setShowSearch} showSearch={showSearch} />
      <FaSearch
        className={`inline cursor-pointer ${showSearch && "hidden"}`}
        onClick={() => setShowSearch(true)}
      />
    </span>
  );
}

export default SearchBox;
