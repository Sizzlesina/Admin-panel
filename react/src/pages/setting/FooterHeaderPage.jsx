import styled from 'styled-components';

const StyledFooterMenu = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

function FooterMenuPage() {
  return (
    <StyledFooterMenu>
      <p className="text-6xl font-semibold text-stone-500">Footer Header</p>
    </StyledFooterMenu>
  );
}

export default FooterMenuPage;
