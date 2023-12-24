import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="md:container md:mx-auto flex flex-1 flex-col h-full w-full">
      <div className="flex flex-1 flex-col">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
