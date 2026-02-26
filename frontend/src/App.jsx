import Home from './components/HomePage/home'
import Login from "./components/Login page/login";
import About_us from "./components/About us/about_us";
import Temples from "./components/Temples/temple";
import Events from "./components/Events/event";
import Volunteer_page from "./components/Volunteers_page/volunteer_page";
import TermsAndConditions from "./components/Volunteers_page/T&C";
import Register from "./components/Registration page/register";
import Admin_control from "./components/Admin control/admin_control";
import Impact from "./components/Impact/impact";
import Seva from "./components/seva/seva";
import ScrollToTop from './scrollToTop';
import { BrowserRouter , Route , Routes } from 'react-router-dom';      // BrowserRouter not working fix it later

const App = () => {
  return (
    <div>
    <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about_us' element={<About_us />} />
        <Route path='/temples' element={<Temples />} />
        <Route path='/events' element={<Events />} />
        <Route path='/volunteer_page' element={<Volunteer_page />} />
        <Route path='/register' element={<Register />} />
        <Route path='/Term & Conditions' element={<TermsAndConditions />} />
        <Route path='/Admin-dashboard' element={<Admin_control />} />
        <Route path='/Impact' element={<Impact />} />
        <Route path='/Seva' element={<Seva />} />
      </Routes>
    </div>
  )
}

export default App