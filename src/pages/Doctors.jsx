import React, { useContext } from 'react'
import doctors from '../data/doctors'
import { useNavigate } from 'react-router-dom'
import DoctorCard from '../Components/DoctorCard'
import { HospitalContext } from '../Context/HospitalContext'

const Doctors = () => {

    const { selectedDoctor, setSelectedDoctor } = useContext(HospitalContext)

    const navigate = useNavigate()

    const chooseDoctor = (doctor) => {
        setSelectedDoctor(doctor)
        navigate("/book-appointments")
    }

    return (
        <div className='p-6'>

            <h1 className='text-3xl font-bold mb-5'>
                Our Doctors
            </h1>

            <div className='grid md:grid-cols-3 gap-5'>

                {
                    doctors.map((doctor) => (
                        <DoctorCard
                            key={doctor.id}
                            doctor={doctor}
                            onBook={chooseDoctor}
                        />
                    ))
                }

            </div>

        </div>
    )
}

export default Doctors