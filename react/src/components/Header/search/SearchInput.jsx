import { FaSearch, FaTimes } from 'react-icons/fa';
import { useHeaders } from '../../../hooks/useHeaders';

function SearchInput() {
  const { showSearch, setShowSearch } = useHeaders();

  return (
    <span
      className={`rounded-2xl bg-stone-200 px-1 py-2 ${showSearch ? 'inline' : 'hidden'}`}
    >
      <FaTimes
        className="inline cursor-pointer select-none"
        onClick={() => setShowSearch(false)}
      />
      <input
        type="text"
        className="mx-2 border-none bg-[rgba(0,0,0,0)]  outline-none"
      />
      <FaSearch className="inline cursor-pointer select-none" />
    </span>
  );
}

export default SearchInput;
