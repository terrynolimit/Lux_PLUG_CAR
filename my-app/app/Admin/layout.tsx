import React from "react";
import Sidebar from "../sidebar/Sidebar";

const layout = ({ children }: any) => {
  return (
    <div className="flex">
      <div className="w-1/4 ">
        <Sidebar />
      </div>
      <div className="w-4/5 ">{children}</div>
    </div>
  );
};

export default layout;
