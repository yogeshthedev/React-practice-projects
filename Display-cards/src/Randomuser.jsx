import React, { useEffect, useState } from "react";

const Randomuser = () => {
  const [cards, setcards] = useState([]);

  const fetchData = async () => {
    let api = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await api.json();
    setcards(data);
    console.log();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
  {cards.map((card) => (
    <div
      key={card.id}
      className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl p-6 space-y-3 border border-gray-200 dark:border-gray-700"
    >
      <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
        {card.title}
      </h1>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{card.body}</p>
      <span className="text-xs text-gray-500 dark:text-gray-400 block">
        By: User ID {card.userID}
      </span>
    </div>
  ))}
</div>

    </>
  );
};

export default Randomuser;
