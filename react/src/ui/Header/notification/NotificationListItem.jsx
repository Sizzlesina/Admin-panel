function NotificationListItem({ item }) {
  return (
    <li className="list-group-item">
      <section className="media">
        <img src={item.src} alt="avatar" className="image" />

        <section className="media-body pr-1">
          <h5 className="text-sm text-stone-600 font-semibold mt-1">
            {item.title}
          </h5>
          <p className="text-xs leading-[1.5rem] font-light ">{item.message}</p>
          <p className="text-xs mt-2 text-[#919aa3]">{item.createdAt}</p>
        </section>
      </section>
    </li>
  );
}

export default NotificationListItem;
