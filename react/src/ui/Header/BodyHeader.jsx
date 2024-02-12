/** @format */

import FullScreen from "./fullScreen/FullScreen";
import Search from "./search/Search";
import Notification from "./notification/Notification";
import Comments from "./comments/Comments";
import Profile from "./user-profile/Profile";
import { useState } from "react";

function BodyHeader() {
  const [showNotification, setShowNotification] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleClickComments = () => {
    if (showNotification || showProfile) return;
    setShowComments(!showComments);
  };
  const handleClickNotification = () => {
    if (showComments || showProfile) return;
    setShowNotification(!showNotification);
  };
  const handleClickProfile = () => {
    if (showComments || showNotification) return;
    setShowProfile(!showProfile);
  };
  return (
    <section className="bg-[#ffffff] w-[calc(100%-14rem)] select-none">
      <section className="flex-between">
        <section>
          <Search />
          <FullScreen />
        </section>
        <section>
          <Notification
            showNotification={showNotification}
            onClickNotification={handleClickNotification}
          />
          <Comments
            onClickComments={handleClickComments}
            showComments={showComments}
          />
          <Profile
            onClickProfile={handleClickProfile}
            showProfile={showProfile}
          />
        </section>
      </section>
    </section>
  );
}

export default BodyHeader;
