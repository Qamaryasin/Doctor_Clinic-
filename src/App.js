import './App.css';
import { Navbar } from './Component/Navbar/Navbar';
import MedinoNavbar from './Component/Navbar/Nav2';
import { Main } from './Component/MainBanner/Main';
import CardRow from './Component/Our Services/Cards';
import ClinicWelcome from './Component/WellcomeC/ClinicWelcome';
import Department from './Component/Department/Department';
import { Appointment } from './Component/Appointment/Appointment';
import { Specialish } from './Component/Specialish/Specialish';
import { Hotline } from './Component/Hotline/Hotline';
import { News } from './Component/Medical_news/News';
import { Footer } from './Component/Footer/Footer';
function App() {
  return (
    <div className="App">
  <Navbar/>
  <MedinoNavbar/>
  <Main/>
  <CardRow/>
  <ClinicWelcome/>
  <Department/>
  <Appointment/>
  <Specialish/>
  <Hotline/>
  <News/>
  <Footer/>
    </div>
  );
}

export default App;
