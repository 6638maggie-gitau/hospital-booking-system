import React, { useState, useContext } from "react";
import { HospitalContext } from "../Context/HospitalContext";

const BookAppointments = () => {

  const { selectedDoctor, addAppointment } = useContext(HospitalContext);

  const [reason, setReason] = useState("");
  const [date, setDate] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    addAppointment({
      doctor: selectedDoctor,
      reason,
      date
    });

    alert("Appointment booked");
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form 
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-96"
      >

        <h2 className="text-xl font-bold mb-5">
          Book Appointment
        </h2>


        <input
          type="text"
          placeholder="Why do you need appointment?"
          className="w-full border p-3 mb-4 rounded"
          value={reason}
          onChange={(e)=>setReason(e.target.value)}
        />


        <input
          type="date"
          className="w-full border p-3 mb-4 rounded"
          value={date}
          onChange={(e)=>setDate(e.target.value)}
        />


        <button
          className="bg-blue-600 text-white w-full py-3 rounded"
        >
          Book
        </button>


      </form>

    </div>
  );
};


export default BookAppointments;