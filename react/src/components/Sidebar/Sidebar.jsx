import { FaBars } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import styled from 'styled-components';
import ItemLink from '../UI/ItemLink';
import Title from '../UI/Title';

const StyledSidebar = styled.aside`
  flex: 0 0 14rem;
  color: #dcdcdc;
  background-color: #404e67;
`;
const SidebarContainer = styled.section`
  position: fixed;
  right: 0;
  top: 3.5rem;
  z-index: 10000;
`;
const SidebarWrapper = styled.section`
  padding: 1rem 0;
  overflow: auto;
`;
function Sidebar() {
  return (
    <StyledSidebar className="hidden md:inline">
      <SidebarContainer>
        <SidebarWrapper>
          <ItemLink icon={<AiFillHome className="inline " />}>خانه</ItemLink>
          <Title>بخش محتوی</Title>
          <ItemLink icon={<FaBars className="inline" />}>دسته ها</ItemLink>
        </SidebarWrapper>
      </SidebarContainer>
    </StyledSidebar>
  );
}

export default Sidebar;
