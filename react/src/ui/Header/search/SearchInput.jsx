import { FaSearch, FaTimes } from "react-icons/fa";

function SearchInput({ setShowSearch, showSearch }) {
  return (
    <span
      className={`bg-stone-200 py-2 px-1 rounded-2xl ${showSearch ? "inline" : "hidden"}`}
    >
      <FaTimes
        className="cursor-pointer inline select-none"
        onClick={() => setShowSearch(false)}
      />
      <input
        type="text"
        className="bg-[rgba(0,0,0,0)] outline-none border-none  mx-2"
      />
      <FaSearch className="inline cursor-pointer select-none" />
    </span>
  );
}

export default SearchInput;
