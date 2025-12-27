import React from 'react';

const temples = [
  {
    name: "ISKCON Mayapur",
    country: "India",
    year: "1972",
    image: "./src/assets/mayapur.png",
    description: "The global headquarters of the Hare Krishna movement, Mayapur is the birthplace of Chaitanya Mahaprabhu. It is currently home to the massive Temple of the Vedic Planetarium (TOVP), which features one of the world's largest Vedic domes and detailed celestial cosmology displays."
  },
  {
    name: "ISKCON Vrindavan",
    country: "India",
    year: "1975",
    image: "./src/assets/vrindavan.png",
    description: "Known as the Krishna-Balaram Mandir, this was one of the first temples personally inaugurated by Srila Prabhupada. It is a masterpiece of white marble architecture, housing the sacred Samadhi of the movement's founder and serving as a central hub for pilgrims in Krishna's holy city."
  },
  {
    name: "ISKCON Bangalore",
    country: "India",
    year: "1997",
    image: "./src/assets/bangalore.png",
    description: "One of the largest temple complexes in the world, this structure seamlessly blends glass and gold with traditional gopuram architecture. It is renowned for its cultural educational programs, a massive gold-plated dhwaja-stambha (flag post), and its extensive 'Akshaya Patra' social service initiatives."
  },
  {
    name: "ISKCON Los Angeles",
    country: "USA",
    year: "1966",
    image: "./src/assets/usa.png",
    description: "Commonly referred to as New Dwaraka, this location served as the Western headquarters during the movement's expansion. It is famous for its elaborate deity worship, the Bhagavad-gita Museum containing lifelike dioramas, and its role as a pioneer in printing spiritual literature in America."
  },
  {
    name: "ISKCON London",
    country: "UK",
    year: "1973",
    image: "./src/assets/london.png",
    description: "Nestled in the Hertfordshire countryside, Bhaktivedanta Manor was donated by George Harrison of The Beatles. This Mock-Tudor estate functions as a spiritual sanctuary, featuring beautiful organic gardens, a primary school, and a unique cow protection center (Goshala)."
  },
  {
    name: "ISKCON Moscow",
    country: "Russia",
    year: "2015",
    image: "./src/assets/russia.png",
    description: "A symbol of modern spiritual resilience, this center serves one of the largest Vedic communities in Europe. Beyond its prayer halls, it functions as a vibrant cultural center offering classes in Sanskrit, yoga, and traditional arts, maintaining a strong community presence in the heart of Russia."
  }
];

const Temple = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">
            ISKCON Temples Around the World
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Exploring the architectural grandeur and spiritual heritage of the International Society for Krishna Consciousness.
          </p>
          <div className="h-1.5 w-32 bg-orange-400 mx-auto rounded-full"></div>
        </header>

        {/* Grid Section */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {temples.map((temple, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden border-b-8 border-green-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="bg-gray-200 h-56 w-full relative">
                <img
                  src={temple.image}
                  alt={temple.name}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=Temple+View'; }}
                />
                <div className="absolute bottom-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {temple.year}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-green-900 mb-1">
                  {temple.name}
                </h2>

                <p className="text-sm text-orange-600 font-bold uppercase tracking-widest mb-4">
                  {temple.country}
                </p>

                <p className="text-gray-700 text-sm leading-relaxed text-justify">
                  {temple.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Temple;