import React from "react";
import Header from "../components/Header/v1/Header";
import Sidebar from "../components/SideBar/v1/Sidebar";

function MainLayout({ children }) {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full h-screen">
          <Header />
          {children}
        </div>
      </div>
    </>
  );
}

export default MainLayout;
