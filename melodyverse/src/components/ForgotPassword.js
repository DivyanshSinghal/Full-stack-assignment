import React, { useState } from 'react';
import { forgotPassword } from '../services/authService';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword(email);
      setMessage('Password reset link sent to your email.');
    } catch (error) {
      setMessage('Failed to send password reset link.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="p-6 bg-white rounded-lg shadow-lg" onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold mb-4">Forgot Password</h2>
        <input
          className="mb-2 p-2 border border-gray-300 rounded w-full"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="p-2 bg-blue-500 text-white w-full rounded" type="submit">
          Submit
        </button>
        {message && <p className="mt-2 text-green-500">{message}</p>}
      </form>
    </div>
  );
}

export default ForgotPassword;
