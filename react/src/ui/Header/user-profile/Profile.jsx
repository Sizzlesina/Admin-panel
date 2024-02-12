import { FaChevronDown } from "react-icons/fa";
import ProfileList from "./ProfileList";

function Profile({ onClickProfile, showProfile }) {
  return (
    <span className="ml-6 md:ml-5 relative" onClick={onClickProfile}>
      <span className="cursor-pointer">
        <img src="./avatar-2.jpg" alt="avatar" className="image inline" />
        <span className="text-stone-500 text-xs select-none">کامران محمدی</span>
        <FaChevronDown className="inline text-xs mr-0.5 select-none" />
      </span>
      {showProfile && <ProfileList />}
    </span>
  );
}

export default Profile;
