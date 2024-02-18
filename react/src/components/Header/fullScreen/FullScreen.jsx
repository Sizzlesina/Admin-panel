import { useState } from 'react';
import { AiOutlineExpand, AiOutlineCompress } from 'react-icons/ai';
function FullScreen() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreen = () => {
    if (
      (document.documentElement && document.fullscreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)
    ) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(
          Element.ALLOW_KEYBOARD_INPUT,
        );
      }
    }
  };

  return (
    <span className="mr-10 hidden cursor-pointer p-1 md:inline">
      {isFullScreen ? (
        <AiOutlineCompress className="inline cursor-pointer select-none" />
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
