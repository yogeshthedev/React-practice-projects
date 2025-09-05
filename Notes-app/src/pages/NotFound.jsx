import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center flex-col gap-12">
      <h1 className="text-9xl text-red-600 text-center">Not found</h1>
      <button
        onClick={() => navigate("/")}
        className="text-4xl px-4 py-2 bg-gray-600 text-white rounded-2xl"
      >
        Home
      </button>
    </div>
  );
};

export default NotFound;
