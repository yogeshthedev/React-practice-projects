import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md py-4 px-8 flex justify-center">
      <div className="flex gap-8 text-lg font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-amber-600 border-b-2 border-amber-600 pb-1 transition"
              : "text-gray-700 hover:text-amber-600 transition"
          }
        >
          Home
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
