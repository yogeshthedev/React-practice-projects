import React from "react";
import { ContactProvider } from "./ContactContext";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

const ContactApp = () => {
  return (
    <ContactProvider>
      <div className="p-4">
        <ContactForm />
        <ContactList />
      </div>
    </ContactProvider>
  );
};

export default ContactApp;
