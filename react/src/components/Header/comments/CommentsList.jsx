import styled from 'styled-components';
import CommentsListItem from './CommentsListItem';

const StyledCommentsList = styled.section`
  position: absolute;
  left: -9.5rem;
  height: calc(100vh - 3.5rem);
  width: 18rem;
  background-color: #ffffff;
  color: black;
  box-shadow: 0 1px 20px 0 rgba(70, 90, 100, 0.08);
  border-right: 1px solid rgba(0, 0, 0, 0.125);
`;
const FAKE_COMMENTS = [
  {
    title: 'محمد هاشمی',
    src: './images/avatar-2.jpg',
    id: 1,
  },
  {
    title: 'محمد هاشمی',
    src: './images/avatar-2.jpg',
    id: 2,
  },
  {
    title: 'محمد هاشمی',
    src: './images/avatar-2.jpg',
    id: 3,
  },
  {
    title: 'محمد هاشمی',
    src: './images/avatar-2.jpg',
    id: 4,
  },
  {
    title: 'محمد هاشمی',
    src: './images/avatar-2.jpg',
    id: 5,
  },
  {
    title: 'محمد هاشمی',
    src: './images/avatar-2.jpg',
    id: 6,
  },
  {
    title: 'محمد هاشمی',
    src: './images/avatar-2.jpg',
    id: 7,
  },
  {
    title: 'محمد هاشمی',
    src: './images/avatar-2.jpg',
    id: 8,
  },
];
function CommentsList() {
  return (
    <StyledCommentsList>
      <section className="border-b px-3">
        <input
          type="text"
          placeholder="جستجو ..."
          className="rounded-sm border-none outline-none"
        />
      </section>
      <section className="scrollbar-none h-[calc(100%-5rem)] overflow-auto">
        <ul className="list-group">
          {FAKE_COMMENTS.map((comment) => (
            <CommentsListItem comment={comment} key={comment.id} />
          ))}
        </ul>
      </section>
    </StyledCommentsList>
  );
}

export default CommentsList;
