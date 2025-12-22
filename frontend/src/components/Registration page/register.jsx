import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    phone: '',
    initiative: ''
  });

  const [accountForm, setAccountForm] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const [isRegistered, setIsRegistered] = useState(false);

  const handleVolunteerChange = (e) => {
    setVolunteerForm({ ...volunteerForm, [e.target.name]: e.target.value });
  };

  const handleAccountChange = (e) => {
    setAccountForm({ ...accountForm, [e.target.name]: e.target.value });
  };

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    setAccountForm({ ...accountForm, email: volunteerForm.email });
    setIsRegistered(true);
  };

  const handleAccountSubmit = (e) => {
    e.preventDefault();
    if (accountForm.password !== accountForm.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    alert('Account Created Successfully');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-10 space-y-10">

      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8 border-t-4 border-green-600">
        <h2 className="text-3xl font-extrabold text-green-800 text-center mb-6">
          Volunteer Registration
        </h2>

        <form onSubmit={handleVolunteerSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={volunteerForm.name}
            onChange={handleVolunteerChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={volunteerForm.email}
            onChange={handleVolunteerChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={volunteerForm.phone}
            onChange={handleVolunteerChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <select
            name="initiative"
            value={volunteerForm.initiative}
            onChange={handleVolunteerChange}
            required
            className="w-full px-4 py-3 border rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">Select Initiative</option>
            <option>Annakshetra</option>
            <option>Gau Seva</option>
            <option>Kitchen</option>
            <option>Sustainability</option>
            <option>Social Media</option>
            <option>Nursery</option>
          </select>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg text-lg font-semibold transition duration-300 cursor-pointer shadow-md hover:shadow-lg"
          >
            Register as Volunteer
          </button>
        </form>
      </div>

      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8 border-t-4 border-green-600 opacity-100">
        <h2 className="text-3xl font-extrabold text-green-800 text-center mb-6">
          Create Account
        </h2>

        <form onSubmit={handleAccountSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            value={accountForm.email}
            readOnly
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-lg bg-gray-100 text-gray-500"
          />

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={accountForm.username}
            onChange={handleAccountChange}
            disabled={!isRegistered}
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 disabled:bg-gray-100"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={accountForm.password}
            onChange={handleAccountChange}
            disabled={!isRegistered}
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 disabled:bg-gray-100"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={accountForm.confirmPassword}
            onChange={handleAccountChange}
            disabled={!isRegistered}
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 disabled:bg-gray-100"
          />

          <Link to='/login'>
            <button
              type="submit"
              disabled={!isRegistered}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg text-lg font-semibold transition duration-300 cursor-pointer shadow-md hover:shadow-lg disabled:bg-orange-300 disabled:cursor-not-allowed"
            >
              Create Account
            </button>
          </Link>
        </form>
      </div>

    </div>
  );
};

export default Register;
