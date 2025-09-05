import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import MovieDetails from "../pages/MovieDetails";


const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SearchBar />} />
      <Route path="/movie/:id" element={<MovieDetails />} />

    </Routes>
  );
};

export default Mainroutes;
