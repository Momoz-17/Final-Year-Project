import React from 'react';
import { Link } from 'react-router-dom';

const initiatives = [
  {
    title: "Annakshetra",
    description: "Our initiative in providing food for life at Govardhan Annashetra needs special volunteers for preparation and distribution of satvik and sanctified food to the rurals. You can also sponsor as a vendor or donor or even support us through various social media platforms.",
    placeholderImage: "./src/assets/Annakshetra.png",
    action: "Volunteer Now",
  },
  {
    title: "Gau Seva",
    description: "Join us in caring for our beloved cows through Gau Seva. We require support for maintenance of the Goshalas, feeding programs, and veterinary care.",
    placeholderImage: "./src/assets/Goshala.png",
    action: "Volunteer Now",
  },
  {
    title: "Kitchen",
    description: "Join us in cooking for over 1000 visitors and 300 community members daily.",
    placeholderImage: "./src/assets/kitchen.png",
    action: "Volunteer Now",
  },
  {
    title: "Sustainability",
    description: "Help us bridge the educational gap in rural communities.",
    placeholderImage: "./src/assets/sustainability.png",
    action: "Volunteer Now",
  },
  {
    title: "Social Media",
    description: "Create content, graphics and social media promotions.",
    placeholderImage: "./src/assets/social media.png",
    action: "Volunteer Now",
  },
  {
    title: "Nursery",
    description: "Engage with 100+ plant varieties and contribute to conservation.",
    placeholderImage: "./src/assets/nursery.png",
    action: "Volunteer Now",
  }
];

const App = () => {
  return (
    <div className='min-h-screen bg-gray-50 flex justify-center py-12 px-4 font-sans'>
      <div className='max-w-7xl w-full'>
        <header className='text-center mb-12'>
          <h1 className='text-4xl font-extrabold text-green-800 pb-4'>
            Let’s Come Together to Make a Difference
          </h1>
          <p className='text-xl text-green-600 mt-2 max-w-2xl mx-auto'>
            Explore our initiatives and find your opportunity to serve the community.
          </p>
          <Link 
            to='register' 
            className='inline-block mt-5 px-8 py-4 text-white bg-orange-500 hover:bg-orange-600 transition duration-300 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg cursor-pointer'
          >
            Register Here!
          </Link>
        </header>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {initiatives.map((item, index) => (
            <div
              key={index}
              className='bg-white shadow-xl rounded-xl p-6 flex flex-col items-center text-center border-t-4 border-green-600 transition duration-500 hover:scale-[1.02]'
            >
              <img
                src={item.placeholderImage}
                alt={item.title}
                className='w-32 h-32 object-cover rounded-full mb-4 ring-4 ring-green-200 shadow-lg'
              />

              <h2 className='text-2xl font-bold text-green-700 mb-2'>
                {item.title}
              </h2>

              <p className='text-gray-600 text-sm mb-6 grow'>
                {item.description}
              </p>

              <Link
                to="/volunteer_page"
                state={{ initiative: item.title }}
                className="w-full text-white bg-orange-500 hover:bg-orange-600 transition duration-300 py-3 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg cursor-pointer text-center"
              >
                {item.action.toUpperCase()}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
