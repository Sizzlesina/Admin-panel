import { FaChevronDown } from 'react-icons/fa';
import ProfileList from './ProfileList';
import { useHeaders } from '../../../hooks/useHeaders';

function Profile() {
  const { handleClickProfile, showProfile } = useHeaders();

  return (
    <span className="relative ml-6 md:ml-5" onClick={handleClickProfile}>
      <span className="cursor-pointer">
        <img
          src="./images/avatar-2.jpg"
          alt="avatar"
          className="image inline"
        />
        <span className="select-none text-xs text-stone-500">کامران محمدی</span>
        <FaChevronDown className="mr-0.5 inline select-none text-xs" />
      </span>
      {showProfile && <ProfileList />}
    </span>
  );
}

export default Profile;
