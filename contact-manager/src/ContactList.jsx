import React from "react";
import { useContact } from "./ContactContext";

const ContactList = () => {
  const { contacts, deleteContact } = useContact();

  if (contacts.length === 0) return <p>No contacts added yet.</p>;

  return (
    <ol className="space-y-4 mt-6 max-w-md mx-auto">
    {contacts.map((contact) => (
      <li
        key={contact.id}
        className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-4 transition hover:shadow-lg"
      >
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            {contact.name}
          </h3>
          <span className="text-sm text-yellow-500 font-medium">
            📞 {contact.phone}
          </span>
        </div>
  
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
          {contact.email}
        </p>
  
        <button
          onClick={() => deleteContact(contact.id)}
          className="text-red-500 hover:text-red-700 dark:hover:text-red-400 text-sm font-medium"
        >
          Delete
        </button>
      </li>
    ))}
  </ol>
  
  );
};

export default ContactList;
