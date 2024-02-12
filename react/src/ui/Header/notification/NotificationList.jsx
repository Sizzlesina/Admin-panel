import styled from "styled-components";
import NotificationListItem from "./NotificationListItem";

const StyledNotificationList = styled.section`
  position: absolute;
  left: 0;
  width: 16rem;
  background-color: white;
  color: #000000;
  box-shadow: 0 1px 20px 0 rgba(70, 90, 100, 0.4);
  border-radius: 0.25rem;
`;
const FAKE_NOTIFICATION = [
  {
    title: "محمد هاشمی",
    message: "این یک متن تستی است ",
    createdAt: "30 دقیقه پیش",
    src: "./avatar-2.jpg",
    id: 1,
  },
  {
    title: "محمد هاشمی",
    message: "این یک متن تستی است ",
    createdAt: "30 دقیقه پیش",
    src: "./avatar-2.jpg",
    id: 2,
  },
  {
    title: "محمد هاشمی",
    message: "این یک متن تستی است ",
    createdAt: "30 دقیقه پیش",
    src: "./avatar-2.jpg",
    id: 3,
  },
];
function NotificationList() {
  return (
    <StyledNotificationList>
      <section className="flex-between">
        <span className="px-2">نوتیفیکیشن ها</span>
        <span className="px-2">
          <span className="bg-red-600 text-white text-sm  px-2 py-0.5 rounded">
            جدید
          </span>
        </span>
      </section>
      <ul className="list-group">
        {FAKE_NOTIFICATION.map((item) => (
          <NotificationListItem item={item} key={item.id} />
        ))}
      </ul>
    </StyledNotificationList>
  );
}

export default NotificationList;
