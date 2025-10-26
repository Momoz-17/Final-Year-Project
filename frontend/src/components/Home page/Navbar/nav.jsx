import React from 'react'

const Nav = () => {
  return (
    <div className="relative w-full h-120 overflow-hidden">
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
          <li><a href="#" className="hover:text-yellow-400">About Us</a></li>
          <li><a href="#" className="hover:text-yellow-400">Temples</a></li>
          <li><a href="#" className="hover:text-yellow-400">Events</a></li>
          <li><a href="#" className="hover:text-yellow-400">Login</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
