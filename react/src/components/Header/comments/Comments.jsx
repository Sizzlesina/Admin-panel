import { FaRegCommentAlt } from 'react-icons/fa';
import CommentsList from './CommentsList';
import { useHeaders } from '../../../hooks/useHeaders';
import { useRef, useState } from 'react';

function Comments() {
  const { handleClickCommentsWrapper, showComments } = useHeaders();
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
    <span className="relative ml-2 md:ml-4" ref={ref}>
      <span className="cursor-pointer " onClick={handleClickCommentsWrapper}>
        <FaRegCommentAlt className="inline select-none" />
        <sup className="select-none rounded-md bg-red-600 px-1 text-xs font-bold text-white">
          3
        </sup>
      </span>
      {showComments && !isOutsideClick && <CommentsList />}
    </span>
  );
}

export default Comments;
