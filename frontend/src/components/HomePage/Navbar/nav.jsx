import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="relative w-full h-150 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        id="bgVideo"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-t-2xl"
      >
        <source src="./src/assets/video.mp4" type="video/mp4" />
      </video>

      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-6 text-white z-10">
        <div className="logo">
          <img src="./src/assets/header logo.png" alt="Logo" className="h-14" />
        </div>

        <ul className="flex gap-8 text-lg font-medium">
          <li><Link to='/Admin-dashboard' className="hover:text-yellow-400">Admin Controls</Link></li>
          <li><Link to='/about_us' className="hover:text-yellow-400">About Us</Link></li>
          <li><Link to='/Temples' className="hover:text-yellow-400">Temples</Link></li>
          <li><Link to='/Events' className="hover:text-yellow-400">Events</Link></li>
          <li><Link to='/login' className="hover:text-yellow-400">Login</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
