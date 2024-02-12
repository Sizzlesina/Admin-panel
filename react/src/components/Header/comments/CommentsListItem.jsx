import { GrStatusGoodSmall } from "react-icons/gr";
function CommentsListItem({ comment }) {
  return (
    <li className="list-group-item">
      <section className="media">
        <img src={comment.src} alt="avatar" className="image" />
        <section className="media-body pr-1">
          <section className="flex-between">
            <h5 className="text-sm font-bold mt-1 ">{comment.title}</h5>
            <span>
              <GrStatusGoodSmall className="inline text-green-500 text-[.4rem]" />
            </span>
          </section>
        </section>
      </section>
    </li>
  );
}

export default CommentsListItem;
