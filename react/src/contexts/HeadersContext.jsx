import { createContext, useContext, useState } from 'react';

const HeadersContext = createContext({
  showNotification: false,
  showComments: false,
  showProfile: false,
});

function HeadersProvider({ children }) {
  const [showNotification, setShowNotification] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  // handle clicks for comments
  const handleClickComments = () => {
    if (showNotification || showProfile) return;
    setShowComments(!showComments);
  };

  // handle clicks for notifications
  const handleClickNotification = () => {
    if (showComments || showProfile) return;
    setShowNotification(!showNotification);
  };

  // handle clicks for profile section
  const handleClickProfile = () => {
    if (showComments || showNotification) return;
    setShowProfile(!showProfile);
  };
  return (
    <HeadersContext.Provider
      value={{
        handleClickComments,
        handleClickNotification,
        handleClickProfile,
        showProfile,
        showNotification,
        showComments,
        showSearch,
        setShowSearch,
      }}
    >
      {children}
    </HeadersContext.Provider>
  );
}

export { HeadersProvider, HeadersContext };
