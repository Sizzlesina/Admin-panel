import styled from 'styled-components';

const StyledPosts = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

function PostsPage() {
  return (
    <StyledPosts>
      <p className="text-6xl font-semibold text-stone-500">Posts</p>
    </StyledPosts>
  );
}

export default PostsPage;
