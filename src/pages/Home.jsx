import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='min-h-screen bg-linear-from-gray-900 to-gray-700'>
        <section className='text-center py-16 px-5'>
            <h1 className='text-3xl font-bold text-blue-600'>Welcome to Health Corner</h1>
            <p className='mt-5 text-gray-600 max-w-xl mx-auto'>Your health is our priority. Just book appointments with our professional doctors and get quality services fast and easily</p>
            <div>
                <Link to='/doctors' className='bg-blue-600 text-white px-5 py- 8 mb-5 rounded-lg'>Find Doctors</Link>
                <Link to='/appointments' className='border border-blue-600 bg-blue-600  text-white  rounded-lg'>My Appointments</Link>
            </div>
        </section>
        <section className='grid md:grid-cols-3 gap-5 px-6'>
            <div className='bg-red-500 shadow rounded-xl p-5'>
                <h2 className='font-bold text-xl'>Professional and Experienced doctors</h2>
                <p className='text-black mt-2'>Connect with highly skilled doctors for better services</p>
            </div>

            <div className='bg-red-500 shadow rounded-xl p-5'>
                <h2 className='font-bold text-xl'>Fast and Easy bookings</h2>
                <p className='text-black mt-2'>Schedule your appointment anytime</p>
            </div>

            <div className='bg-red-500 shadow rounded-xl p-5'>
                <h2 className='font-bold text-xl'>Quality Care for You</h2>
                <p className='text-black mt-2'>We give reliable health services</p>
            </div>
        </section>
    </div>
  )
}

export default Home