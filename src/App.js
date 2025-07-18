import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Component/Navbar/Navbar';
import MedinoNavbar from './Component/Navbar/Nav2';
import { Footer } from './Component/Footer/Footer';

//Paages
import AppointmentPage from './Component/Pages/AppointmentPage/AppointmentPage';
import DoctorsPage from './Component/Pages/DoctorPage/DoctorsPage';
import ContactPage from './Component/Pages/ContactPage/ContactPage';

// Move these into HomePage
import { Main } from './Component/MainBanner/Main';
import CardRow from './Component/Our Services/Cards';
import ClinicWelcome from './Component/WellcomeC/ClinicWelcome';
import Department from './Component/Department/Department';
import { Appointment } from './Component/Appointment/Appointment';
import { Specialish } from './Component/Specialish/Specialish';
import { Hotline } from './Component/Hotline/Hotline';
import { News } from './Component/Medical_news/News';


function Home() {
  return (
    <>
      <Main />
      <CardRow />
      <ClinicWelcome />
      <Department />
      <Appointment />
      <Specialish />
      <Hotline />
      <News />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <MedinoNavbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
