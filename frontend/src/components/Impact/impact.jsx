import React from 'react';

const impactData = [
  {
    title: "Meals Served",
    value: "25,000+",
    description: "Nutritious prasadam distributed through Annakshetra to villagers and visitors.",
    icon: "🍲"
  },
  {
    title: "Trees Planted",
    value: "4,200+",
    description: "Saplings planted as part of eco-restoration and sustainability initiatives.",
    icon: "🌱"
  },
  {
    title: "Cows Protected",
    value: "350+",
    description: "Cows cared for through Gau Seva with shelter, food, and medical support.",
    icon: "🐄"
  },
  {
    title: "Active Volunteers",
    value: "1,200+",
    description: "Dedicated volunteers contributing time, skills, and service across initiatives.",
    icon: "👥"
  }
];

const Impact = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-extrabold text-green-800 text-center mb-4">
          Seva Impact Hub
        </h1>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Every act of seva creates a ripple of positive change. This page highlights the
          real impact created through collective service and devotion.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {impactData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-6 border-t-4 border-green-600 text-center hover:scale-[1.03] transition-transform"
            >
              <div className="text-4xl mb-3">{item.icon}</div>

              <h2 className="text-3xl font-extrabold text-green-800">
                {item.value}
              </h2>

              <h3 className="text-lg font-semibold text-orange-500 mt-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-green-50 p-10 rounded-3xl text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Why This Impact Matters
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            At Govardhan EcoVillage, seva is not just an activity — it is a way of life.
            Through conscious service, sustainable practices, and spiritual values, we aim
            to uplift individuals, communities, and the environment together.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Impact;
