import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { verifyEmail } from '../services/authService';

function VerifyEmail() {
  const { token } = useParams();
  const message = useRef('');
  const navigate = useNavigate();
  const hasVerified = useRef(false);
  const verifying = useRef(false);

  useEffect(() => {
    if (hasVerified.current || verifying.current) return;
    const verify = async () => {
      try {
        verifying.current = true;
        await verifyEmail(token);
        hasVerified.current = true;
        message.current.innerHTML = 'Email verified successfully. Redirecting to login...';
        setTimeout(() => {
          navigate('/login');
        }, 3000);
        verifying.current = false;
      } catch (error) {
        console.log("verify email error:", error);
        message.current.innerHTML = 'Verification failed. Please try again.';
      }
    };
    verify();
  }, [token, navigate]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Email Verification</h2>
        <p ref={message} className="text-red-500"></p>
      </div>
    </div>
  );
}

export default VerifyEmail;
