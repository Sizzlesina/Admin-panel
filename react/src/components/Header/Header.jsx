/** @format */
import styled from "styled-components";
import SidebarHeader from "./SidebarHeader";
import BodyHeader from "./BodyHeader";
import { HeadersProvider } from "../../contexts/HeadersContext";

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
`;

function Header() {
  return (
    <HeadersProvider>
    <StyledHeader className="md:block">
      <SidebarHeader />
      <BodyHeader />
    </StyledHeader>
    </HeadersProvider>
  );
}
export default Header;