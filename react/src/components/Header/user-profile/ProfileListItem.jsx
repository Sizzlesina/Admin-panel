function ProfileListItem({ option }) {
  return (
    <a
      href="##"
      className="list-group-item p-1 text-xs leading-6 text-stone-700"
    >
      {option.icon} {option.title}
    </a>
  );
}

export default ProfileListItem;
