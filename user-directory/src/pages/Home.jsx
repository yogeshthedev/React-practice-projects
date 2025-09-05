import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [users, setusers] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    let api = await fetch("https://jsonplaceholder.typicode.com/users");
    let response = await api.json();
    setusers(response);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (id) => {
    navigate(`/user/${id}`);
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-5xl font-bold text-center mb-12 text-amber-900">
        User Directory
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center gap-4 hover:shadow-xl transition duration-300"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-amber-200 text-amber-900 text-2xl font-bold">
                {item.name.charAt(0)}
              </div>
              <h1 className="text-xl font-semibold text-gray-800 text-center">
                {item.name}
              </h1>
              <h2 className="text-sm text-gray-600">{item.email}</h2>
              <button
                className="mt-4 px-5 py-2 rounded-lg bg-amber-500 text-white font-semibold hover:bg-amber-600 transition duration-200"
                onClick={() => handleClick(item.id)}
              >
                View Details
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
