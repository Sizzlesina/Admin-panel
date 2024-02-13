/** @format */

import FullScreen from './fullScreen/FullScreen';
import Search from './search/Search';
import Notification from './notification/Notification';
import Comments from './comments/Comments';
import Profile from './user-profile/Profile';

function BodyHeader() {
  return (
    <section className="hidden select-none bg-[#ffffff] md:inline md:w-[calc(100%-14rem)]">
      <section className="flex-between">
        <section className="invisible md:visible">
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
