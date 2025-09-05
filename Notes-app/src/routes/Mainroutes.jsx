import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";
import NotFound from "../pages/NotFound";

const Mainroutes = () => {
  const [notes, setnotes] = useState([
    {
      id: 2,
      detail:
        "kdsfksdlfhfkjsdhfkjhsdjkfhlskjdhflkjsdhkjfhalkjhf uhfishdhsfdkjsdhjfh",
    },
  ]);

  return (
    <Routes>
      <Route
        path="/"
        element={<NoteList notes={notes} setnotes={setnotes} />}
      />
      <Route
        path="/addnote"
        element={<NoteForm notes={notes} setnotes={setnotes} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Mainroutes;
