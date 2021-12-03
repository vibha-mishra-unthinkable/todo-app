import React from "react";
import Topbar from "../Topbar/Topbar";
import Sidebar from "../Sidebar/Sidebar";

const Layout = (props) => {
  let { children } = props;
  return (
    <>
      <Topbar />
      <div className="homeConatiner">
        <Sidebar />
        {children}
      </div>
    </>
  );
};

export default Layout;
