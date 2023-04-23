import React from "react";
import Sidebar from "./Sidebar";

function Layout({ children, hideHeader }) {
  return (
    <div className="flex gap-5 min-h-screen">
      <div className="hidden md:flex">
        <Sidebar />
      </div>

      <main className="max-w-5xl flex-1 mx-auto h-screen">{children} </main>
    </div>
  );
}

export default Layout;
