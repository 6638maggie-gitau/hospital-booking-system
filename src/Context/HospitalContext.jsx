import React from "react";
import { createContext, useState } from "react";

export const HospitalContext = createContext();

export const HospitalProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]);


  const Login = (email, password) => {
    if (email && password) {
      setUser({
        email
      });
      return true;
    }
    return false;
  };


  const logout = () => {
    setUser(null);
  };


  const addAppointment = (data) => {
    setAppointments(prev => [
      ...prev,
      data
    ]);
  };


  return (
    <HospitalContext.Provider
      value={{
        user,
        Login,
        logout,

        selectedDoctor,
        setSelectedDoctor,

        appointments,
        addAppointment
      }}
    >
      {children}
    </HospitalContext.Provider>
  );
};

export default HospitalContext;