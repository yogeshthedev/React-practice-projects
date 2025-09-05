import { nanoid } from "nanoid/non-secure";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FeedbackForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [feedback, setfeedback] = useState([
    {
      id: 1,
      name: "yogesh",
      email: "abc@gmail",
      message: "yha message ",
      rating: 4,
    },
  ]);

  console.log(errors);

  const onSubmit = (data) => {
    let item = {
      id: nanoid(),
      name: data.name,
      email: data.email,
      message: data.message,
      rating: data.rating,
    };
    setfeedback([...feedback, item]);
    reset();
  };

  const renderFeedback = feedback.map((todo) => (
    <li key={todo.id} className="mb-4">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-4 transition hover:shadow-lg">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            {todo.name}
          </h3>
          <span className="text-sm text-yellow-500 font-medium">
            ⭐ {todo.rating}/5
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {todo.message}
        </p>
        <p className="text-xs text-gray-400 mt-2">{todo.email}</p>
      </div>
    </li>
  ));

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name")} />
        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        <textarea
          {...register("message", { required: "Message is required" })}
        />
        <input
          type="number"
          {...register(
            "rating",
            { min: 0, max: 5 },
            { required: "Rating is required" },
            { valueAsNumber: true }
          )}
        />
        <button>Submit</button>
      </form>
      <ol>{renderFeedback}</ol>
    </div>
  );
};

export default FeedbackForm;
