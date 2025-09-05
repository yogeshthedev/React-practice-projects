import React from "react";
import MeApp from "./MeApp";
import { BrowserRouter } from "react-router-dom";

const MeMain = () => {
  return (
    <BrowserRouter>
      <MeApp />
    </BrowserRouter>
  );
};

export default MeMain;
