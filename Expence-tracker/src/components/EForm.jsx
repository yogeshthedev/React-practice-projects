import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

const EForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [transcations, settranscations] = useState([]);

  const SubmitHandler = (data) => {
    const amount = Number(data.amount);
    const newtran = {
      id: nanoid(),
      title: data.title,
      amount: amount,
      type: data.value,
    };
    settranscations([...transcations, newtran]);
    reset();
  };

  // Calculate totals using reduce
  const { totalincome, totalexpence } = transcations.reduce(
    (acc, tran) => {
      if (tran.type === "income") {
        acc.totalincome += tran.amount;
      } else {
        acc.totalexpence += tran.amount;
      }
      return acc;
    },
    { totalincome: 0, totalexpence: 0 }
  );

  const totalbalance = totalincome - totalexpence;

  const rendertrans = transcations.map((item) => (
    <li key={item.id}>
      <p>{item.title}</p>
      <p>
        <span>{item.type === "expence" ? "-" : "+"}</span>
        {item.amount}
      </p>
    </li>
  ));

  return (
    <div className="w-full flex justify-center bg-black text-white">
      <div className="w-[300px] h-full">
        <h1 className="text-center w-full p-2">
          Total Balance : <span className="text-amber-400">{totalbalance}</span>
        </h1>
        <h1 className="text-center w-full p-2">
          Total Income : <span className="text-amber-400">{totalincome}</span>
        </h1>
        <h1 className="text-center w-full p-2">
          Total Expence : <span className="text-amber-400">{totalexpence}</span>
        </h1>

        <form
          className="flex flex-col gap-[1rem]"
          onSubmit={handleSubmit(SubmitHandler)}
        >
          <input
            className="bg-white text-black"
            type="text"
            placeholder="title"
            {...register("title", { required: true })}
          />
          <input
            className="bg-white text-black"
            type="number"
            placeholder="amount"
            {...register("amount", { required: true })}
          />
          <select {...register("value")}>
            <option value="income" className="text-black">
              Income
            </option>
            <option value="expence" className="text-black">
              Expence
            </option>
          </select>
          <button className="px-4 py-2 rounded-2xl bg-gray-600 cursor-pointer">
            Add
          </button>
        </form>

        <ul>{rendertrans}</ul>
      </div>
    </div>
  );
};

export default EForm;
