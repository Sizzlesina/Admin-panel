import { createContext, useCallback, useState } from 'react';

const HeadersContext = createContext({
  showNotification: false,
  showComments: false,
  showProfile: false,
  showSearch: false,
  toggleSidebar: false,
  isFullScreen: false,
});

function HeadersProvider({ children }) {
  const [showNotification, setShowNotification] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [isOpenHeader, setIsOpenHeader] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  // handle clicks for comments
  const handleClickComments = useCallback(() => {
    setShowComments((prevState) => !prevState);
    setShowProfile(false);
    setShowNotification(false);
  }, []);

  const handleClickCommentsWrapper = () => {
    handleClickComments();
  };
  // handle clicks for notifications
  const handleClickNotification = useCallback(() => {
    setShowNotification((prevState) => !prevState);
    setShowProfile(false);
    setShowComments(false);
  }, []);

  const handleClickNotificationWrapper = () => {
    handleClickNotification();
  };
  // handle clicks for profile section
  const handleClickProfile = useCallback(() => {
    setShowProfile((prevState) => !prevState);
    setShowComments(false);
    setShowNotification(false);
  }, []);

  const handleClickProfileWrapper = () => {
    handleClickProfile();
  };

  // show sidebar using a click
  const handleToggleSidebar = useCallback(() => {
    setIsOpenSidebar((prevState) => !prevState);
  }, []);

  // show body header using a click
  const handleToggleHeader = () => {
    setIsOpenHeader((prevState) => !prevState);
  };

  // handler function to enter and exit the fullscreen
  const handleFullScreen = () => {
    if (document.fullscreenElement) {
      document
        .exitFullscreen()
        .then(() => {
          setIsFullScreen(false);
        })
        .catch((err) => console.error(err));
    } else {
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    }
  };
  return (
    <HeadersContext.Provider
      value={{
        showProfile,
        showNotification,
        showComments,
        showSearch,
        isOpenSidebar,
        isOpenHeader,
        isFullScreen,
        setShowSearch,
        handleToggleHeader,
        handleToggleSidebar,
        handleFullScreen,
        handleClickProfileWrapper,
        handleClickNotificationWrapper,
        handleClickCommentsWrapper,
      }}
    >
      {children}
    </HeadersContext.Provider>
  );
}

export { HeadersProvider, HeadersContext };
