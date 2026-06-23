import React, { useContext } from "react";
import { HospitalContext } from "../Context/HospitalContext";

const Appointments = () => {

  const { appointments } = useContext(HospitalContext);


  return (
    <div className="p-8">

      <h1 className="text-2xl font-bold mb-5">
        My Appointments
      </h1>


      {appointments.length === 0 ? (
        <p>No appointments yet</p>
      ) : (

        appointments.map((appointment, index)=>(
          <div 
            key={index}
            className="bg-white shadow p-5 mb-4 rounded"
          >

            <p>
              Doctor: {appointment.doctor?.name}
            </p>

            <p>
              Date: {appointment.date}
            </p>

            <p>
              Reason: {appointment.reason}
            </p>

          </div>
        ))

      )}

    </div>
  );
};

export default Appointments;