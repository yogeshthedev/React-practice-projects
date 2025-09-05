import React from "react";
import { BrowserRouter } from "react-router-dom";
import RfApp from "./RfApp";
import { ToastContainer } from "react-toastify";

const ReMain = () => {
  return (
    <BrowserRouter>
      <RfApp />
      <ToastContainer  position="top-right"
      autoClose={1000}
      hideProgressBar={false}
       />
    </BrowserRouter>
  );
};

export default ReMain;
