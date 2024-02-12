import { useState } from "react";
import { FaRegCommentAlt } from "react-icons/fa";
import CommentsList from "./CommentsList";
function Comments({ onClickComments, showComments }) {
  return (
    <span className="ml-4 md:ml-6 relative">
      <span className="cursor-pointer ">
        <FaRegCommentAlt
          className="inline select-none"
          onClick={onClickComments}
        />
        <sup className="bg-red-600 text-white text-xs font-bold px-1 rounded-md select-none">
          3
        </sup>
      </span>
      {showComments && <CommentsList />}
    </span>
  );
}

export default Comments;
