import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './pages/Home'
import Login from './pages/Login'
import Doctors from './pages/Doctors'
import BookAppointments from './pages/BookAppointments'
import MyAppointments from './pages/MyAppointments'

const App = () => {
  return (
    <>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path ='/doctors' element={<Doctors />} />
      <Route path='/book-appointments' element={<BookAppointments />} />
      <Route path='/appointments' element={<MyAppointments />} />
    </Routes>
    </>
  )
}

export default App