import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const NoteForm = ({ notes, setnotes }) => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const submiteHanlder = (data) => {
    const newNote = {
      id: nanoid(),
      detail: data.detail,
    };
    setnotes([...notes, newNote]);
    reset();
    navigate("/");
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-6">
      <form
        onSubmit={handleSubmit(submiteHanlder)}
        className="bg-white p-6 shadow-lg rounded-xl space-y-4"
      >
        <h2 className="text-xl font-semibold text-gray-800">Create a Note</h2>
        <input
          type="text"
          {...register("detail", { required: true })}
          placeholder="Enter note here..."
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Save Note
        </button>
      </form>
    </div>
  );
};

export default NoteForm;
