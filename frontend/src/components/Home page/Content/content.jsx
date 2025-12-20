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
    description: "Join us in carinAg for our beloved cows through Gau Seva. We require support for maintenance of the Goshalas, feeding programs, and veterinary care. Your compassion makes a direct impact on the well-being of the cattle.",
    placeholderImage: "./src/assets/Goshala.png",
    action: "Volunteer Now",
  },
  {
    title: "Kitchen",
    description: "Savor the joy of service in our main kitchen, where every meal is a symphony of sustainability. Join us in cooking for over 1000 visitors and 300 community members daily. Experience the fulfillment of providing free full lunch (Prasadam) to villagers, day visitors, and rural areas across 40+ villages.",
    placeholderImage: "./src/assets/kitchen.png",
    action: "Volunteer Now",
  },
  {
    title: "Sustainability",
    description: "Help us bridge the educational gap in rural communities. We are looking for teachers, mentors, and resource coordinators to run evening classes and provide educational supplies to underprivileged children.",
    placeholderImage: "./src/assets/sustainability.png",
    action: "Volunteer Now",
  },
  {
    title: "Social Media",
    description: "Create content, graphics and other social media deliverables as online promotions, marketing strategies and website development for various events and launches.",
    placeholderImage: "./src/assets/social media.png",
    action: "Volunteer Now",
  },
  {
    title: "Nursery",
    description: "Step into our in-house nursery, a sanctuary for biodiversity and reforestation. Engage with 100+ plant varieties, from trees to flowering plants, contributing to the ecological richness of Govardhan EcoVillage. Play a vital role in conservation efforts and the beautification of our sustainable haven. Be a guardian of the green, nurturing the Earth’s bounty for future generations. Your hands can plant the seeds of change, fostering life and beauty in every corner of our EcoVillage.",
    placeholderImage: "./src/assets/nursery.png",
    action: "Volunteer Now",
  }
];

const App = () => {
  return (
    // Main container uses Inter font and centers content on a light green background
    <div className='min-h-screen bg-gray-50 flex justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans'>
      <div className='max-w-7xl w-full'>
        {/* Header Section */}
        <header className='text-center mb-12'>
          <h1 className='text-4xl sm:text-5xl font-extrabold text-green-800 pb-4'>
            Let’s Come Together to Make a Difference
          </h1>
          <p className='text-xl text-green-600 mt-2 max-w-2xl mx-auto'>
            Explore our initiatives and find your opportunity to serve the community.
          </p>
        </header>

        {/* Card Grid Container - Fully Responsive */}
        {/* Default: 1 column | Small Screens (sm): 2 columns | Large Screens (lg): 3 columns */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {initiatives.map((item, index) => (
            // Individual Card
            <div
              key={index}
              className='bg-white shadow-xl rounded-xl p-6 flex flex-col items-center text-center border-t-4 border-green-600 transition duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-2xl'
            >
              {/* Image with nice transition effects */}
              <img
                src={item.placeholderImage}
                alt={item.title}
                className='w-32 h-32 object-cover rounded-full mb-4 ring-4 ring-green-200 shadow-lg'
              />

              {/* Title */}
              <h2 className='text-2xl font-bold text-green-700 mb-2'>
                {item.title}
              </h2>

              {/* Description */}
              <p className='text-gray-600 text-sm mb-6 grow'>
                {item.description}
              </p>

              {/* Action Button */}
              <Link to='volunteer_page' className='w-full bold text-white bg-orange-500 hover:bg-orange-600 transition duration-300 py-3 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-300'>
                <button
                  // onClick={() => alert(`Redirecting to ${item.title} sign-up!`)}
                >
                  {item.action.toUpperCase()}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;