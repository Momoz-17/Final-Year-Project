import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const VolunteerPage = () => {
  const { state } = useLocation();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    initiative: state?.initiative || '',
    city: '',
    skills: '',
    availability: '',
    motivation: '',
    emergencyContact: '',
    consent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.consent) {
      alert('Please accept the consent to proceed');
      return;
    }

    try {
      const token = localStorage.getItem('token'); // Get the token we saved during login
      
      const response = await fetch('http://localhost:5000/api/enroll', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Send token for security
        },
        body: JSON.stringify(form) // This sends all your form fields to the backend
      });

      const data = await response.json();

      if (response.ok) {
        alert(`Success! You are enrolled for ${form.initiative}`);
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to connect to the server.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-xl p-8 border-t-4 border-green-600">

        <h1 className="text-3xl font-extrabold text-green-800 text-center mb-2">
          Volunteer Application
        </h1>

        <p className="text-center text-gray-600 mb-6">
          You are applying for <span className="font-semibold text-green-700">{form.initiative}</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="initiative"
            value={form.initiative}
            readOnly
            className="w-full px-4 py-3 border rounded-lg bg-gray-100 text-gray-600"
          />

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />

          <input
            type="text"
            name="skills"
            placeholder="Skills / Experience (optional)"
            value={form.skills}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />

          <input
            type="text"
            name="availability"
            placeholder="Availability (Days & Duration)"
            value={form.availability}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />

          <textarea
            name="motivation"
            placeholder="Why do you want to volunteer?"
            value={form.motivation}
            onChange={handleChange}
            rows="3"
            required
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />

          <input
            type="tel"
            name="emergencyContact"
            placeholder="Emergency Contact Number"
            value={form.emergencyContact}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />

          <label className="flex items-start gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              name="consent"
              checked={form.consent}
              onChange={handleChange}
              className="mt-1"
            />
            <span>
              I agree to the{' '}
              <a
                href="/Term & Conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 font-semibold hover:underline"
              >
                Terms & Conditions
              </a>{' '}
              and consent to be contacted.
            </span>
          </label>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg text-lg font-semibold transition shadow-md hover:shadow-lg"
          >
            Submit Application
          </button>

        </form>
      </div>
    </div>
  );
};

export default VolunteerPage;
