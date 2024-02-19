import styled from 'styled-components';

const StyledArticle = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

function ArticlesPage() {
  return (
    <StyledArticle>
      <p className="text-6xl font-semibold text-stone-500">Articles</p>
    </StyledArticle>
  );
}

export default ArticlesPage;
