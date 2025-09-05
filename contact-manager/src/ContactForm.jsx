import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid/non-secure";
import { useContact } from "./ContactContext";

const ContactForm = () => {
  const { addContact } = useContact();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newContact = {
      id: nanoid(),
      name: data.name,
      email: data.email,
      phone: data.phone,
    };
    addContact(newContact);
    reset();
  };

  return (
    <form
    onSubmit={handleSubmit(onSubmit)}
    className="bg-white dark:bg-gray-900 shadow-md rounded-2xl p-6 max-w-md w-full mx-auto space-y-4"
  >
    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Add New Contact</h2>
  
    {/* Name Input */}
    <div>
      <input
        {...register("name", { required: "Name is required" })}
        placeholder="Full Name"
        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.name && (
        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
      )}
    </div>
  
    {/* Email Input */}
    <div>
      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
            message: "Invalid email format",
          },
        })}
        placeholder="Email Address"
        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.email && (
        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
      )}
    </div>
  
    {/* Phone Input */}
    <div>
      <input
        {...register("phone", {
          required: "Phone number is required",
          pattern: {
            value: /^\d{10}$/,
            message: "Enter a valid 10-digit number",
          },
        })}
        placeholder="Phone Number"
        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.phone && (
        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
      )}
    </div>
  
    {/* Submit Button */}
    <button
      type="submit"
      className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
    >
      Add Contact
    </button>
  </form>
  
  );
};

export default ContactForm;
