import React from "react";
import { Route, Routes } from "react-router-dom";
import UserDetail from "../pages/UserDetail";
import Home from "./../pages/Home";

const Mainroutes = () => {
  return (
    <div className="h-full w-full px-8 py-6 bg-gray-100 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </div>
    </div>
  );
};

export default Mainroutes;
