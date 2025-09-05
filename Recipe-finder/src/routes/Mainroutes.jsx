import React from "react";
import { Route, Routes } from "react-router-dom";

import RecipeDetail from "./../pages/RecipeDetail";
import SearchBar from "../components/SearchBar";
const Mainroutes = () => {
  return (
    <>
      <div className="p-6">
        <Routes>
          <Route path="/" element={<SearchBar />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </>
  );
};

export default Mainroutes;
