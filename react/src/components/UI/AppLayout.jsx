import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Sidebar from './Sidebar';
import styled from 'styled-components';

const StyledAppLayout = styled.section`
  margin-top: 3.5rem;
  height: 100vh;
  z-index: 100000;
  display: flex;
`;
function AppLayout() {
  return (
    <>
      <Header />
      <StyledAppLayout>
        <Sidebar />
        <Outlet />
      </StyledAppLayout>
    </>
  );
}

export default AppLayout;
