import styled from 'styled-components';

const StyledMenuHeader = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

function MenuHeaderPage() {
  return (
    <StyledMenuHeader>
      <p className="text-6xl font-semibold text-stone-500">Menu Header</p>
    </StyledMenuHeader>
  );
}

export default MenuHeaderPage;
