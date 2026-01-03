import React from 'react';
import { Link } from 'react-router-dom';

const events = [
  {
    title: "Janmashtami Celebration",
    date: "26 August",
    time: "All Day",
    location: "Govardhan EcoVillage",
    image: "./src/assets/janmashtami.png",
    description:
      "Celebrate the divine appearance of Lord Krishna with kirtans, abhishek, cultural programs, and prasadam distribution."
  },
  {
    title: "Evening Kirtan & Satsang",
    date: "Every Saturday",
    time: "6:00 PM – 8:00 PM",
    location: "Temple Hall",
    image: "./src/assets/satsang.png",
    description:
      "Join us for soulful kirtans, spiritual discussions, and association with devotees in a peaceful atmosphere."
  },
  {
    title: "Green Govardhan Drive",
    date: "5 June",
    time: "8:00 AM – 11:00 AM",
    location: "EcoVillage परिसर",
    image: "./src/assets/green.png",
    description:
      "A community tree-plantation and eco-awareness drive promoting sustainable and conscious living."
  },
  {
    title: "Annakshetra Seva Day",
    date: "Every Sunday",
    time: "9:00 AM – 1:00 PM",
    location: "Community Kitchen",
    image: "./src/assets/Annakshetra.png",
    description:
      "Volunteer in cooking and distributing sanctified meals (prasadam) to villagers and visitors."
  }
];

const Events = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-extrabold text-green-800 text-center mb-4">
          Upcoming Events
        </h1>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Participate in our spiritual, community, and eco-conscious events and be part of meaningful experiences.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-green-600 hover:scale-[1.02] transition-transform flex flex-col"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-green-700">
                  {event.title}
                </h2>

                <p className="text-sm text-orange-500 font-semibold mt-1">
                  {event.date} • {event.time}
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  📍 {event.location}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed mt-3 mb-6 flex-grow">
                  {event.description}
                </p>

                <Link
                  to="/volunteer_page"
                  state={{ initiative: event.title }}
                  className="mt-auto text-center bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition shadow-md"
                >
                  Volunteer for Event
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Events;
