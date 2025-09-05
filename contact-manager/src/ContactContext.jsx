// contact-manager/ContactContext.jsx
import { createContext, useContext, useState } from "react";

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "yogesh",
      email: "abc@gmail.com",
      phone: "9848478534",
    },
  ]);

  const addContact = (contact) => {
    setContacts((prev) => [...prev, contact]);
  };

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <ContactContext.Provider value={{ contacts, addContact, deleteContact }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => useContext(ContactContext);
