import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import styled from 'styled-components';
import { useHeaders } from '../../hooks/useHeaders';

const StyledAppLayout = styled.section`
  margin-top: 3.5rem;
  height: 100vh;
  z-index: 100000;
  display: flex;
`;
function AppLayout() {
  const { isOpenSidebar } = useHeaders();
  return (
    <>
      <Header />
      <StyledAppLayout>
        {isOpenSidebar && <Sidebar />}
        <Outlet />
      </StyledAppLayout>
    </>
  );
}

export default AppLayout;
