import styled from 'styled-components';
import CommentsListItem from './CommentsListItem';
import { FAKE_COMMENTS } from '../../../helpers/constants.jsx';

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
          {FAKE_COMMENTS.map((comment, index) => (
            <CommentsListItem comment={comment} key={index} />
          ))}
        </ul>
      </section>
    </StyledCommentsList>
  );
}

export default CommentsList;
