"use client";
import React, { useRef, useState, useEffect } from "react";
import "./loginForm.css";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import Link from "next/link";
 
const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    termsAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const VALID_EMAIL = "Charles9@gmail.com";
  const VALID_PASSWORD = "earnhive";

  useEffect(() => {
    if (isSubmitted) {
      validateForm();
    }
  }, [formData, isSubmitted]);
  

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (isSubmitted) {
      validateForm();
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate email
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (formData.email !== VALID_EMAIL) {
      newErrors.email = "Incorrect email.";
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password !== VALID_PASSWORD) {
      newErrors.password = "Incorrect password.";
    }

    // Validate terms acceptance
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "You must accept the terms and conditions.";
    }

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    validateForm();
    if (isFormValid) {
      console.log("Form submitted successfully");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
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
          onChange={handleChange}
          ref={emailRef}
          style={{ border: isSubmitted && errors.email ? "1px solid red" : "" }}
        />
        {isSubmitted && errors.email && <span className="error">{errors.email}</span>}
      </div>

      {/* Password Field */}
      <div className="input-holder">
        <label htmlFor="Password">
          Password <span className="asterisk"> *</span>
        </label>
        <span style={{
          width: "100%",
          position: "relative"
        }}>
        <div className="password-input-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            id="Password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            ref={passwordRef}
            style={{ border: isSubmitted && errors.password ? "1px solid red" : "" }}
          />
         <span
            style={{
              position: "absolute",
              top: "40%",
              right: "5%",
              cursor: "pointer",
              fontSize: "1.2rem"
            }}
            className="toggle-password-visibility"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>
        </span>
        {isSubmitted && errors.password && <span className="error">{errors.password}</span>}
      </div>

      {/* Terms and Conditions */}
      <div className="terms">
        <input
          type="checkbox"
          id="checkbox"
          name="termsAccepted"
          checked={formData.termsAccepted}
          onChange={handleChange}
        />
        <label htmlFor="checkbox">Accept Terms and conditions</label>
      </div>
      {isSubmitted && errors.termsAccepted && <span className="error">{errors.termsAccepted}</span>}

      {/* Submit Button */}
      <button 
        type="submit" 
        style={{
            filter: isFormValid ? 'none' : 'grayscale(100%)',
          opacity: isFormValid ? 1 : 0.5,
          transition: 'all 0.3s ease'
        }}
      >
        Sign In
      </button>

      {/* Sign Up Link */}
      <div className="text-[#5D7186]">
        Don't have an account?{" "}
        <Link href="/SignUp" className="text-[#E2AE22] font-bold">
          Sign up
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;

