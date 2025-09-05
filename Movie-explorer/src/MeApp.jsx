import React from "react";
import SearchBar from "./components/SearchBar";
import Mainroutes from "./routes/Mainroutes";

const MeApp = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full">
        <Mainroutes />
      </main>

      <footer className="bg-white border-t mt-6 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Movie Explorer. All rights reserved.
      </footer>
    </div>
  );
};

export default MeApp;
