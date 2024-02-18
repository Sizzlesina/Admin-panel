import styled from 'styled-components';
import NotificationListItem from './NotificationListItem';
import { FAKE_NOTIFICATION } from '../../../helpers/constants.jsx';

const StyledNotificationList = styled.section`
  position: absolute;
  left: 0;
  width: 16rem;
  background-color: white;
  color: #000000;
  box-shadow: 0 1px 20px 0 rgba(70, 90, 100, 0.4);
  border-radius: 0.25rem;
`;

function NotificationList() {
  return (
    <StyledNotificationList>
      <section className="flex-between">
        <span className="px-2">نوتیفیکیشن ها</span>
        <span className="px-2">
          <span className="rounded bg-red-600 px-2  py-0.5 text-sm text-white">
            جدید
          </span>
        </span>
      </section>
      <ul className="list-group">
        {FAKE_NOTIFICATION.map((item, index) => (
          <NotificationListItem item={item} key={index} />
        ))}
      </ul>
    </StyledNotificationList>
  );
}

export default NotificationList;
