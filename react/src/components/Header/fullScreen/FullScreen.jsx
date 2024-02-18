import { AiOutlineExpand, AiOutlineCompress } from 'react-icons/ai';
import { useHeaders } from '../../../hooks/useHeaders';
function FullScreen() {
  const { handleFullScreen, isFullScreen } = useHeaders();

  return (
    <span className="mr-10 hidden cursor-pointer p-1 md:inline">
      {isFullScreen ? (
        <AiOutlineCompress
          className="inline cursor-pointer select-none"
          onClick={handleFullScreen}
        />
      ) : (
        <AiOutlineExpand
          className="inline cursor-pointer select-none"
          onClick={handleFullScreen}
        />
      )}
    </span>
  );
}

export default FullScreen;
