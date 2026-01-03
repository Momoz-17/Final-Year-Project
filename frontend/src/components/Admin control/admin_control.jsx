import React, { useState } from 'react';

const AdminDashboard = () => {
  const [event, setEvent] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    image: '',
    description: ''
  });

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    alert('Event added successfully (connect backend later)');
    setEvent({
      title: '',
      date: '',
      time: '',
      location: '',
      image: '',
      description: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navbar */}
      <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between border-b-2 border-green-600">
        <div className="logo">
          <img src="./src/assets/header logo.png" alt="Logo" className="h-14" />
        </div>

        <div className="flex items-center gap-6">
          <span className="text-green-700 font-semibold cursor-pointer">
            Applications
          </span>
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
            Admin
          </span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">

        {/* Controls */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Volunteer Applications', count: 128 },
            { label: 'Event Volunteers', count: 54 },
            { label: 'Upcoming Events', count: 6 },
            { label: 'Total Users', count: 312 }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-600"
            >
              <h3 className="text-lg font-semibold text-gray-700">
                {item.label}
              </h3>
              <p className="text-3xl font-extrabold text-green-800 mt-2">
                {item.count}
              </p>
            </div>
          ))}
        </section>

        {/* Add Event */}
        <section className="bg-white rounded-xl shadow-xl p-8 border-t-4 border-orange-500">
          <h2 className="text-2xl font-bold text-green-800 mb-6">
            Add New Event
          </h2>

          <form onSubmit={handleAddEvent} className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="title"
              placeholder="Event Title"
              value={event.title}
              onChange={handleChange}
              required
              className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
            />

            <input
              type="text"
              name="date"
              placeholder="Date (eg: 26 August)"
              value={event.date}
              onChange={handleChange}
              required
              className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
            />

            <input
              type="text"
              name="time"
              placeholder="Time (eg: 6:00 PM – 8:00 PM)"
              value={event.time}
              onChange={handleChange}
              required
              className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              value={event.location}
              onChange={handleChange}
              required
              className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
            />

            <input
              type="text"
              name="image"
              placeholder="Image URL / Path"
              value={event.image}
              onChange={handleChange}
              required
              className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none md:col-span-2"
            />

            <textarea
              name="description"
              placeholder="Event Description"
              value={event.description}
              onChange={handleChange}
              rows="3"
              required
              className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none md:col-span-2"
            ></textarea>

            <button
              type="submit"
              className="md:col-span-2 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition shadow-md"
            >
              Add Event
            </button>
          </form>
        </section>

      </div>
    </div>
  );
};

export default AdminDashboard;

/* Things to add
1️⃣ Manage Events (Edit / Delete)
After adding events, admin must control them.
What to show:
-Event name
-Date
-Status (Upcoming / Past)
-Buttons: Edit | Delete
👉 This is the natural next step after “Add Event”. 

2️⃣ Event-wise Volunteer List
-Admin selects an event → sees volunteers.
-Example:
Janmashtami (23 volunteers)
Annakshetra Seva Day (12 volunteers)
-Click → list opens.

3️⃣ Announcements / Notices
Admin can:
-Post notices
-Cancel events
-Change timings
Shows on Events page.

4️⃣ Gallery Manager
After events:
-Upload photos
-Assign to event
Show on website

5️⃣ Message Volunteers
Simple:
-Select event
-Send message (mock / alert)
*/