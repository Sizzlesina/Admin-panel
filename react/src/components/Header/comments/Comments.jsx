import { FaRegCommentAlt } from 'react-icons/fa';
import CommentsList from './CommentsList';
import { useHeaders } from '../../../hooks/useHeaders';

function Comments() {
  const { handleClickComments, showComments } = useHeaders();

  return (
    <span className="relative ml-4 md:ml-6">
      <span className="cursor-pointer ">
        <FaRegCommentAlt
          className="inline select-none"
          onClick={handleClickComments}
        />
        <sup className="select-none rounded-md bg-red-600 px-1 text-xs font-bold text-white">
          3
        </sup>
      </span>
      {showComments && <CommentsList />}
    </span>
  );
}

export default Comments;
