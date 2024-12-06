"use client";
import React, { useRef, useState } from "react";
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
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const VALID_EMAIL = "Charles9@gmail.com";
  const VALID_PASSWORD = "earnhive";

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "email") emailRef.current.style.border = "1px solid #ccc";
    if (name === "password") passwordRef.current.style.border = "1px solid #ccc";
  };

  const validate = () => {
    const newErrors = {};

    emailRef.current.style.border = "1px solid #ccc";
    passwordRef.current.style.border = "1px solid #ccc";

    // Validate email
    if (!formData.email) {
      newErrors.email = "Email is required.";
      emailRef.current.style.border = "1px solid red";
    } else if (formData.email !== VALID_EMAIL) {
      newErrors.email = "Incorrect email.";
      emailRef.current.style.border = "1px solid red";
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = "Password is required.";
      passwordRef.current.style.border = "1px solid red";
    } else if (formData.password !== VALID_PASSWORD) {
      newErrors.password = "Incorrect password.";
      passwordRef.current.style.border = "1px solid red";
    }

    // Validate terms acceptance
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "You must accept the terms and conditions.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev); // Toggle the visibility of the password
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
        />
        {errors.email && <span className="error">{errors.email}</span>}
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
          />
         <span style={{
          position: "absolute",
          top: "40%",
          right: "5%",
          cursor: "pointer",
          fontSize: "1.2rem"

         }}
            className="toggle-password-visibility"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash /> } {/* Toggle between eye open and closed */}
          </span>
        
        </div>
        </span>
        {errors.password && <span className="error">{errors.password}</span>}
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
      {errors.termsAccepted && <span className="error">{errors.termsAccepted}</span>}

      {/* Submit Button */}
      <button type="submit">Sign In</button>

      {/* Sign Up Link */}
      <div className="text-[#5D7186]">
        Don’t have an account?{" "}

        <Link href="/SignUp" className="text-[#E2AE22] font-bold" >
        
          Sign up
       
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
