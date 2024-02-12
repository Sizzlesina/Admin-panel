import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

function AppLayout() {
  return (
    <section>
      <Header />
      <main>
        <Outlet />
      </main>
    </section>
  );
}

export default AppLayout;
