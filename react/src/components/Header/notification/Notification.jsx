import { FaRegBell } from 'react-icons/fa';
import NotificationList from './NotificationList';
import { useHeaders } from '../../../hooks/useHeaders';
function Notification() {
  const { handleClickNotification, showNotification } = useHeaders();

  return (
    <span className="relative ml-4 md:ml-6">
      <span className="cursor-pointer">
        <FaRegBell
          className="inline cursor-pointer select-none"
          onClick={handleClickNotification}
        />
        <sup className="select-none rounded-md bg-red-600 px-1 text-xs font-bold text-white">
          4
        </sup>
        {showNotification && <NotificationList />}
      </span>
    </span>
  );
}

export default Notification;
