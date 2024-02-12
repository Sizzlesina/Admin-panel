import { FaSearch } from 'react-icons/fa';
import SearchInput from './SearchInput';
import { useHeaders } from '../../../hooks/useHeaders';

function SearchBox() {
  const { showSearch, setShowSearch } = useHeaders();

  return (
    <span className="mr-5">
      <SearchInput setShowSearch={setShowSearch} showSearch={showSearch} />
      <FaSearch
        className={`inline cursor-pointer ${showSearch && 'hidden'}`}
        onClick={() => setShowSearch(true)}
      />
    </span>
  );
}

export default SearchBox;
