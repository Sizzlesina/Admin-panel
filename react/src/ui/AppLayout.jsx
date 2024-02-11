/** @format */

import { Outlet } from "react-router";

function AppLayout() {
  return (
    <div>
      <span className='text-8xl'>App Layout </span>
      <Outlet />
    </div>
  );
}

export default AppLayout;
