import React, { useState } from 'react';
import { resetPassword } from '../services/authService';
import { useParams, useNavigate } from 'react-router-dom';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(token, password);
      setMessage('Password reset successful.');
      setTimeout(() => navigate('/login'), 2000);
    } catch (error) {
      setMessage('Failed to reset password.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="p-6 bg-white rounded-lg shadow-lg" onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold mb-4">Reset Password</h2>
        <input
          className="mb-2 p-2 border border-gray-300 rounded w-full"
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="p-2 bg-blue-500 text-white w-full rounded" type="submit">
          Submit
        </button>
        {message && <p className="mt-2 text-green-500">{message}</p>}
      </form>
    </div>
  );
}

export default ResetPassword;
