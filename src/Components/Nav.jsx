import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HospitalContext } from "../Context/HospitalContext";

const Nav = () => {
  const { user, logout } = useContext(HospitalContext);

  return (
    <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between">
      <h1 className="font-bold text-xl">Health Corner</h1>

      <div className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/doctors">Doctors</Link>
        <Link to="/appointments">Appointments</Link>
        <Link to='/book-appointments'>BookAppointments</Link>

        {user ? (
          <button
            onClick={logout}
            className="bg-white text-blue-600 px-3 rounded"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}

      </div>
    </nav>
  );
};

export default Nav;