"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import "./signUp.css";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false
  });
  const [error, setError] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handlePasswordChange = (e) => {
    handleInputChange(e);
    if (formData.confirmPassword && e.target.value !== formData.confirmPassword) {
      setError("Passwords don't match");
    } else {
      setError('');
    }
  };

  const handleConfirmPasswordChange = (e) => {
    handleInputChange(e);
    if (formData.password && e.target.value !== formData.password) {
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

  const validateForm = () => {
    const isValid = 
      formData.email.trim() !== '' &&
      formData.password.trim() !== '' &&
      formData.confirmPassword.trim() !== '' &&
      formData.password === formData.confirmPassword &&
      formData.termsAccepted;
    setIsFormValid(isValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      // Handle form submission
      console.log('Form submitted:', formData);
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
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
          value={formData.email}
          onChange={handleInputChange}
          required
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
            value={formData.password}
            onChange={handlePasswordChange}
            style={{ borderColor: error ? 'red' : '' }}
            required
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
            value={formData.confirmPassword}
            onChange={handleConfirmPasswordChange}
            style={{ borderColor: error ? 'red' : '' }}
            required
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
          checked={formData.termsAccepted}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="checkbox">Accept Terms and conditions</label>
      </div>

      {/* Submit Button */}
      <button 
        type="submit" 
        disabled={!isFormValid}
        style={{
          filter: isFormValid ? 'none' : 'grayscale(100%)',
          opacity: isFormValid ? 1 : 0.5,
          transition: 'all 0.3s ease'
        }}
      >
        Create Account
      </button>

      {/* Sign Up Link */}
      <div className="text-[#5D7186]">
        Don't have an account?{" "}
        <Link href="/" className="text-[#E2AE22] font-bold">
          Sign in
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;

