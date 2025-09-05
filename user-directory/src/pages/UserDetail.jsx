import React, { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserDetail = () => {
  const param = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const fetchData = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${param.id}`
    );
    const data = await res.json();
    setUser(data);
    console.log(data);
  };
  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-900 shadow-lg rounded-2xl">
      {user ? (
        <>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {user.name}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            @{user.username}
          </p>

          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Contact Info
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                📧 {user.email}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                📞 {user.phone}
              </p>
              <a
                className="text-sm text-blue-600 dark:text-blue-400 underline"
                target="_blank"
                href={`https://${user.website}`}
              >
                {user.website}
              </a>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Address
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {user.address.suite}, {user.address.street},<br />
                {user.address.city}, {user.address.zipcode}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                📍 Geo: {user.address.geo.lat}, {user.address.geo.lng}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Company
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                {user.company.name}
              </p>
              <p className="text-sm italic text-gray-500 dark:text-gray-400">
                "{user.company.catchPhrase}"
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500">
                {user.company.bs}
              </p>
            </div>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400">
          Loading...
        </p>
      )}
      <div className="flex items-center justify-center">
        <button
          className="w-fit px-4 py-2 rounded cursor-pointer bg-amber-200 text-zinc-900 font-bold"
          onClick={handleBack}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default UserDetail;
