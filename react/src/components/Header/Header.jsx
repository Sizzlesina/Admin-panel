/** @format */
import styled from 'styled-components';
import SidebarHeader from '../Sidebar/SidebarHeader';
import BodyHeader from './BodyHeader';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  line-height: 3.5rem;
  display: flex;
  justify-content: space-around;
  z-index: 1000;
  align-items: stretch;

  @media only screen and (max-width: 767.98px) {
    display: block;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <SidebarHeader />
      <BodyHeader />
    </StyledHeader>
  );
}
export default Header;
