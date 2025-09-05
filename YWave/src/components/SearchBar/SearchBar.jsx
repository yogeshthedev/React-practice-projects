import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchName, setsearchName] = useState("");
  const navi = useNavigate();
  const handlerSearch = (e) => {
    e.preventDefault();
    navi(`/search?q=${searchName}`);
    setsearchName("");
  };

  return (
    <form onSubmit={handlerSearch}>
      <input
        type="text"
        value={searchName}
        onChange={(e) => setsearchName(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
};

export default SearchBar;
