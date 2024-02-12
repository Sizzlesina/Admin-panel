/** @format */

import { Outlet } from "react-router";
import Header from "./Header/Header";

function AppLayout() {
  return (
    <section className="mt-[3.5rem] flex -z-50">
      <Header />
      <main>
        <Outlet />
      </main>
    </section>
  );
}

export default AppLayout;
