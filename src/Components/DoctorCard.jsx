import React from 'react'

const DoctorCard = ( {doctor, onBook}) => {
  return (
    <div className='bg-white rounded-xl shadow p-6'>
        <h2 className='text-xl font-bold mt-3'>{doctor.name}</h2>
        <p className='text-gray-500'>{doctor.speciality}</p>
        <p>Experience :{doctor.experience}</p>

        <button onClick={() => onBook(doctor)} className='mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg'>Book Now</button>
    </div>
  )
}

export default DoctorCard