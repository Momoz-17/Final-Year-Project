import React, { useState, useEffect } from 'react';

const AdminDashboard = () => {
  // --- State for Event Form ---
  const [event, setEvent] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    image: '',
    description: ''
  });

  // --- State for Real Data ---
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- Fetch Applications from Backend ---
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:5000/api/enroll/admin/all', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
        if (data.success) {
          setApplications(data.data);
        }
      } catch (err) {
        console.error("Failed to fetch applications", err);
      } finally {
        setLoading(false);
      }
    };
    fetchApplications();
  }, []);

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    alert('Event added successfully (Backend route for events needed next!)');
    setEvent({ title: '', date: '', time: '', location: '', image: '', description: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between border-b-2 border-green-600 sticky top-0 z-50">
        <div className="logo">
          {/* Note: In Vite/React, use absolute paths from public or import images */}
          <img src="/src/assets/header logo.png" alt="Logo" className="h-14" />
        </div>
        <div className="flex items-center gap-6">
          <a href="#applications" className="text-green-700 font-semibold cursor-pointer hover:underline">
            Applications
          </a>
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
            Admin Mode
          </span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
        
        {/* Dashboard Stats */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Volunteer Applications', count: applications.length },
            { label: 'Event Volunteers', count: 54 },
            { label: 'Upcoming Events', count: 6 },
            { label: 'Total Users', count: 312 }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-600 transform hover:scale-105 transition">
              <h3 className="text-lg font-semibold text-gray-700">{item.label}</h3>
              <p className="text-3xl font-extrabold text-green-800 mt-2">{item.count}</p>
            </div>
          ))}
        </section>

        {/* 1️⃣ Manage Volunteer Applications (New Section) */}
        <section id="applications" className="bg-white rounded-xl shadow-xl p-8 border-t-4 border-green-700">
          <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-2">
            Recent Applications
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="px-4 py-3 border text-left">Applicant</th>
                  <th className="px-4 py-3 border text-left">Initiative</th>
                  <th className="px-4 py-3 border text-left">City</th>
                  <th className="px-4 py-3 border text-left">Status</th>
                  <th className="px-4 py-3 border text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan="5" className="text-center py-4 text-gray-500">Loading data...</td></tr>
                ) : applications.length > 0 ? (
                  applications.map((app) => (
                    <tr key={app._id} className="hover:bg-green-50 transition">
                      <td className="px-4 py-3 border">
                        <div className="font-semibold">{app.name}</div>
                        <div className="text-xs text-gray-500">{app.email}</div>
                      </td>
                      <td className="px-4 py-3 border text-green-700 font-medium">{app.initiative}</td>
                      <td className="px-4 py-3 border">{app.city}</td>
                      <td className="px-4 py-3 border">
                        <span className="px-2 py-1 rounded-full text-xs font-bold bg-yellow-100 text-yellow-700 uppercase">
                          {app.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 border text-center">
                        <button className="text-blue-600 hover:underline text-sm font-semibold">View Details</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr><td colSpan="5" className="text-center py-4 text-gray-500">No applications found.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* 2️⃣ Add Event Form */}
        <section className="bg-white rounded-xl shadow-xl p-8 border-t-4 border-orange-500">
          <h2 className="text-2xl font-bold text-green-800 mb-6">Add New Event</h2>
          <form onSubmit={handleAddEvent} className="grid md:grid-cols-2 gap-4">
            <input type="text" name="title" placeholder="Event Title" value={event.title} onChange={handleChange} required className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none" />
            <input type="text" name="date" placeholder="Date (eg: 26 August)" value={event.date} onChange={handleChange} required className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none" />
            <input type="text" name="time" placeholder="Time (eg: 6:00 PM – 8:00 PM)" value={event.time} onChange={handleChange} required className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none" />
            <input type="text" name="location" placeholder="Location" value={event.location} onChange={handleChange} required className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none" />
            <input type="text" name="image" placeholder="Image URL / Path" value={event.image} onChange={handleChange} required className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none md:col-span-2" />
            <textarea name="description" placeholder="Event Description" value={event.description} onChange={handleChange} rows="3" required className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none md:col-span-2"></textarea>
            <button type="submit" className="md:col-span-2 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition shadow-md">
              Publish Event
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