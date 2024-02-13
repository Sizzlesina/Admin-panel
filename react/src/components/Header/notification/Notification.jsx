import { FaRegBell } from 'react-icons/fa';
import NotificationList from './NotificationList';
import { useHeaders } from '../../../hooks/useHeaders';
import { useRef, useState } from 'react';
function Notification() {
  const { showNotification, handleClickNotificationWrapper } = useHeaders();
  const ref = useRef(null);
  const [isOutsideClick, setIsOutsideClick] = useState(false);

  const handleClick = (e) => {
    if (!ref.current.contains(e.target)) {
      setIsOutsideClick(true);
    } else {
      setIsOutsideClick(false);
    }
  };

  document.addEventListener('click', handleClick);

 

  return (
    <span className="relative ml-4 md:ml-6" ref={ref}>
      <span className="cursor-pointer" onClick={handleClickNotificationWrapper}>
        <FaRegBell className="inline cursor-pointer select-none" />
        <sup className="select-none rounded-md bg-red-600 px-1 text-xs font-bold text-white">
          4
        </sup>
      </span>
      {showNotification && !isOutsideClick && <NotificationList />}
    </span>
  );
}

export default Notification;
