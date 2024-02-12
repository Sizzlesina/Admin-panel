/** @format */

import FullScreen from "./fullScreen/FullScreen";
import Search from "./search/Search";
import Notification from "./notification/Notification";
import Comments from "./comments/Comments";
import Profile from "./user-profile/Profile";

function BodyHeader() {
  return (
    <section className="bg-[#ffffff] w-[calc(100%-14rem)] select-none">
      <section className="flex-between">
        <section>
          <Search />
          <FullScreen />
        </section>
        <section>
          <Notification />
          <Comments />
          <Profile />
        </section>
      </section>
    </section>
  );
}

export default BodyHeader;
