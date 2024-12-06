"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import "./signUp.css";

const SignUpForm = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (confirmPassword && e.target.value !== confirmPassword) {
      setError("Passwords don't match");
    } else {
      setError('');
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (password && e.target.value !== password) {
      setError("Passwords don't match");
    } else {
      setError('');
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(prevState => !prevState);
  };

  return (
    <form className="signup-form">
      {/* Email Field */}
      <div className="input-holder">
        <label htmlFor="Email">
          Email <span className="asterisk"> *</span>
        </label>
        <input
          type="email"
          id="Email"
          name="email"
          placeholder="Enter Email"
        />
      </div>

      {/* Password Field */}
      <div className="input-holder">
        <label htmlFor="Password">
          Password <span className="asterisk"> *</span>
        </label>
        <div className="password-input-wrapper w-full relative">
          <input
            type={isPasswordVisible ? "text" : "password"}
            id="Password"
            name="password"
            placeholder="Enter Password"
            value={password}
            onChange={handlePasswordChange}
            style={{ borderColor: error ? 'red' : '' }}
          />
          <span
            onClick={togglePasswordVisibility}
            style={{
              position: "absolute",
              top: "40%",
              right: "5%",
              cursor: "pointer",
              fontSize: "1.2rem",
            }}
            className="toggle-password-visibility"
          >
            {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>
      </div>

      {/* Confirm Password Field */}
      <div className="input-holder">
        <label htmlFor="ConfirmPassword">
          Confirm Password <span className="asterisk"> *</span>
        </label>
        <div className="password-input-wrapper w-full relative">
          <input
            type={isConfirmPasswordVisible ? "text" : "password"}
            id="ConfirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            style={{ borderColor: error ? 'red' : '' }}
          />
          <span
            onClick={toggleConfirmPasswordVisibility}
            style={{
              position: "absolute",
              top: "40%",
              right: "5%",
              cursor: "pointer",
              fontSize: "1.2rem",
            }}
            className="toggle-password-visibility"
          >
            {isConfirmPasswordVisible ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>
        {/* Display Error if Passwords don't match */}
        {error && <div className="error-message text-red-600 text-[0.9rem]">{error}</div>}
      </div>

      {/* Terms and Conditions */}
      <div className="terms">
        <input
          type="checkbox"
          id="checkbox"
          name="termsAccepted"
          required
        />
        <label htmlFor="checkbox">Accept Terms and conditions</label>
      </div>

      {/* Submit Button */}
      <button type="submit" disabled={!!error}>Create Account</button>

      {/* Sign Up Link */}
      <div className="text-[#5D7186]">
        Dont have an account?{" "}
        <Link href="/" className="text-[#E2AE22] font-bold">
          Sign in
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;

