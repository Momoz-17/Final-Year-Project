import Home from './components/Home page/home'
import Login from "./components/Login page/login";
import About_us from "./components/About us/about_us";
import Temples from "./components/Temples/temple";
import Events from "./components/Events/event";
import Volunteer_page from "./components/Volunteers_page/volunteer_page"
import { Route , Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about_us' element={<About_us />} />
        <Route path='/Temples' element={<Temples />} />
        <Route path='/Events' element={<Events />} />
        <Route path='/volunteer_page' element={<Volunteer_page />} />
      </Routes>
    </div>
  )
}

export default App