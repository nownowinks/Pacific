import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import ExamsCoaching from './pages/ExamsCoaching';
import CareerCounseling from './pages/CareerCounseling';
import SpokenEnglish from './pages/SpokenEnglish';
import PersonalityDevelopment from './pages/PersonalityDevelopment';
import StudyInUSA from './pages/StudyInUSA';
import StudyInItaly from './pages/StudyInItaly';
import OtherPage from './pages/OtherPage';
import Teams from './pages/Teams';
import ContactUs from './pages/ContactUs';
import ApplicationProcess from './pages/ApplicationProcess';
function App() {

  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />}> </Route>
          <Route exact path="/aboutus" element={<AboutUs />}> </Route>
          <Route exact path="/examandcoaching" element={<ExamsCoaching/>}> </Route>
          <Route exact path="/careercounseling" element={<CareerCounseling/>}> </Route>
          <Route exact path="/spokenenglish" element={<SpokenEnglish/>}> </Route>
          <Route exact path="/application" element={<ApplicationProcess/>}> </Route>
          <Route exact path="/personalitydevlopment" element={<PersonalityDevelopment/>}> </Route>
          <Route exact path="/studyinusa" element={<StudyInUSA/>}> </Route>
          <Route exact path="/contact" element={<ContactUs/>}> </Route>
          <Route exact path="/studyinitaly" element={<StudyInItaly/>}> </Route>
          <Route exact path="/studyinindia" element={<OtherPage heading = {"Heading"} para1 = {"paragraph 1"} para2 = {"paragraph 2"} />}> </Route>
          <Route exact path="/teams" element={<Teams/>}> </Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
