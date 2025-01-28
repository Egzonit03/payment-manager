import { Routes, Route } from 'react-router-dom';
import Register from './pages/Registration.tsx';
import Menu from './pages/Menu.tsx';
import ViewAllPatients from './pages/ViewAllPatients.tsx';
import SearchForAPatient from './pages/SearchForAPatient.tsx';
import AddNewPatient from './pages/AddNewPatient.tsx';
import UpdatePayment from './pages/UpdatePayment.tsx';
import ArrangeAnAppointment from './pages/ArrangeAnAppointment.tsx';
import ViewAppointments from './pages/ViewAppointments.tsx';
import MonthlySummary from './pages/MonthlySummary.tsx';

//Extra Pages
import Welcome from './extras/Welcome.tsx';
import Settings from './extras/Settings.tsx';
import Contact from './extras/ContactUs.tsx';
import About from './extras/AboutUs.tsx';
import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/register' element={<Register />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/action1' element={<ViewAllPatients />} />
      <Route path='/action2' element={<SearchForAPatient />} />
      <Route path='/action3' element={<AddNewPatient />} />
      <Route path='/action4' element={<UpdatePayment />} />
      <Route path='/action5' element={<ArrangeAnAppointment />} />
      <Route path='/action6' element={<ViewAppointments />} />
      <Route path='/action7' element={<MonthlySummary />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='contact' element={<Contact />} />
      <Route path='about' element={<About />} />
    </Routes>
    </>
  )
}

export default App
