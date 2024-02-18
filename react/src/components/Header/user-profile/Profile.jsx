import { FaChevronDown } from 'react-icons/fa';
import ProfileList from './ProfileList';
import { useHeaders } from '../../../hooks/useHeaders';
import { useRef, useState } from 'react';

function Profile() {
  const { showProfile, handleClickProfileWrapper } = useHeaders();
  const ref = useRef();
  const [isOutsideClick, setIsOutsideClick] = useState(false);

  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOutsideClick(true);
    } else {
      setIsOutsideClick(false);
    }
  };

  document.addEventListener('click', handleClick);

  return (
    <span className="relative ml-6  md:ml-5" ref={ref}>
      <span className="cursor-pointer" onClick={handleClickProfileWrapper}>
        <img
          src="./images/avatar-2.jpg"
          alt="avatar"
          className="image inline"
        />
        <span className="select-none text-xs text-stone-500">کامران محمدی</span>
        <FaChevronDown className="mr-0.5 inline select-none text-xs" />
      </span>
      {showProfile && !isOutsideClick && <ProfileList />}
    </span>
  );
}

export default Profile;
