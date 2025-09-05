import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NoteList = ({ notes, setnotes }) => {
  const navigate = useNavigate();

  const deleteHandler = (id) => {
    const del = notes.filter((e) => e.id != id);
    setnotes(del);
  };

  const [editingId, seteditingId] = useState(null);
  const [EditValue, setEditValue] = useState("");

  const editHandler = (data) => {
    seteditingId(data.id);
    setEditValue(data.detail);
  };

  const saveHandler = (id) => {
    const saveNote = notes.map((note) => {
      return note.id == id ? { ...note, detail: EditValue } : note;
    });
    setnotes(saveNote);
    seteditingId(null);
  };

  const cancleHandler = () => {
    seteditingId(null);
  };

  const renderNotes = notes.map((item) => {
    return (
        <li
        key={item.id}
        className="bg-white shadow-md rounded-xl p-4 text-gray-800 flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center"
      >
        {editingId === item.id ? (
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full">
            <input
              type="text"
              value={EditValue}
              onChange={(e) => setEditValue(e.target.value)}
              className="flex-1 px-3 py-2 border rounded-md text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
      
            <div className="flex gap-2">
              <button
                onClick={() => saveHandler(item.id)}
                className="px-4 py-2 text-sm bg-green-500 text-white rounded hover:bg-green-600 transition"
              >
                Save
              </button>
              <button
                onClick={cancleHandler}
                className="px-4 py-2 text-sm bg-gray-400 text-white rounded hover:bg-gray-500 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full gap-3">
            <h1 className="text-lg font-medium">{item.detail}</h1>
            <div className="flex gap-2">
              <button
                onClick={() => editHandler(item)}
                className="px-4 py-2 text-sm bg-yellow-400 text-white rounded hover:bg-yellow-500 transition"
              >
                Edit
              </button>
              <button
                onClick={() => deleteHandler(item.id)}
                className="px-4 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          </div>
        )}
      </li>
      
    );
  });

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Your Notes</h2>
        <button
          onClick={() => navigate("/addnote")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          + Add Note
        </button>
      </div>
      <ul className="space-y-4">{renderNotes}</ul>
    </div>
  );
};

export default NoteList;
