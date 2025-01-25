import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import FindDoctor from './Pages/FindDoctor'
import Login from './Pages/Login'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'
import Appointment from './Pages/Appointment'
import UserAppointment from './Pages/UserAppointment'
import Userpofile from './Pages/Userpofile'
import Contactus from './Pages/Contactus'
import Our_team from './Pages/Our_team'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './Pages/Verify'
import MedicalGuidance from './Pages/MedicalGuidance'

import Footer from './components/Footer'

    const App = () => {
      return (
        <>
          <ToastContainer />
          <Navbar />
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/FindDoctor' element={<FindDoctor />} />
              <Route path='FindDoctor/:speciality' element={<FindDoctor />} />
              <Route path='/login' element={<Login />} />
              <Route path='/AboutUs' element={<AboutUs />} />
              <Route path='/MedicalGuidance' element={<MedicalGuidance />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/Appointment' element={<Appointment />} />
              <Route path='/UserAppointment' element={<UserAppointment />} />
              <Route path="/Contactus" element={<Contactus/>} />
              <Route path="/Appointment/:docId" element={<Appointment />} />
              <Route path='/Userprofile' element={<Userpofile />} />
              <Route path='/our_team' element={<Our_team />} />
              <Route path='/verify' element={<Verify />} />
            </Routes>
          </main>
          <Footer />
        </>
      );
    }


export default App