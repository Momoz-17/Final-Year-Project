import React, { useState } from 'react';

const sevaOptions = [
  {
    name: "Annakshetra",
    skills: ["cooking", "teamwork", "service"]
  },
  {
    name: "Gau Seva",
    skills: ["animal care", "patience", "physical work"]
  },
  {
    name: "Sustainability",
    skills: ["farming", "environment", "teaching"]
  },
  {
    name: "Social Media",
    skills: ["design", "writing", "video editing"]
  },
  {
    name: "Nursery",
    skills: ["gardening", "plants", "physical work"]
  }
];

const FindYourSeva = () => {
  const [skills, setSkills] = useState('');
  const [availability, setAvailability] = useState('');
  const [result, setResult] = useState(null);

  const findSeva = () => {
    const userSkills = skills.toLowerCase();

    const matched = sevaOptions.find(option =>
      option.skills.some(skill => userSkills.includes(skill))
    );

    setResult(matched ? matched.name : "General Volunteering");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 border-t-4 border-green-600">

        <h1 className="text-4xl font-extrabold text-green-800 text-center mb-4">
          Find Your Seva
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Discover the best way you can serve based on your skills and availability.
        </p>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your skills (eg: cooking, teaching, design)"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />

          <input
            type="text"
            placeholder="Availability (eg: weekends, full-time)"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />

          <button
            onClick={findSeva}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg text-lg font-semibold transition shadow-md"
          >
            Find My Seva
          </button>
        </div>

        {result && (
          <div className="mt-8 bg-green-50 p-6 rounded-xl text-center">
            <h2 className="text-2xl font-bold text-green-800 mb-2">
              Recommended Seva
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Based on your inputs, we suggest:
            </p>
            <p className="text-3xl font-extrabold text-orange-500">
              {result}
            </p>

            <a
              href="/volunteer_page"
              className="inline-block mt-6 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Apply for This Seva        {/*   this has some issue    */}
            </a>
          </div>
        )}

      </div>
    </div>
  );
};

export default FindYourSeva;
