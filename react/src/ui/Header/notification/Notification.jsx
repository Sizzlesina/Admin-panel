import { FaRegBell } from "react-icons/fa";
import NotificationList from "./NotificationList";
function Notification({ onClickNotification, showNotification }) {
  return (
    <span className="ml-4 md:ml-6 relative">
      <span className="cursor-pointer">
        <FaRegBell
          className="inline cursor-pointer select-none"
          onClick={onClickNotification}
        />
        <sup className="bg-red-600 text-white text-xs font-bold px-1 rounded-md select-none">
          4
        </sup>
        {showNotification && <NotificationList />}
      </span>
    </span>
  );
}

export default Notification;
