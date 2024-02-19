import { Link } from 'react-router-dom';

function ProfileListItem({ option }) {
  return (
    <Link className="list-group-item p-1 text-xs leading-6 text-stone-700">
      {option.icon} {option.title}
    </Link>
  );
}

export default ProfileListItem;
