import React from "react";
import Image from "next/image";
import SignUpForm from "../../../components/signup/SignUpForm";

const page = () => {
  return (
    <div className="login-page">
      <h1>Welcome to Earn-hive</h1>
      <p>Sign up by entering information below</p>
      <SignUpForm />

      <div className="img round-shape">
        <Image
          src="https://res.cloudinary.com/dwedz2laa/image/upload/v1733434625/brown_circle.svg_fill_u3j52w.png"
          alt=""
          width={100}
          height={100}
        />
      </div>

      <div className="img bee">
        <Image
          src="https://res.cloudinary.com/dwedz2laa/image/upload/v1733462176/cute-bees-with-dotted-line-route-set-vector-illustration-isolated-on-white-2FYNA42-removebg-preview_1_rwrajy.png"
          alt=""
          width={100}
          height={100}
        />
      </div>

      <div className="img blub">
        <Image
          src="https://res.cloudinary.com/dwedz2laa/image/upload/v1733434624/ani-18.png_plqtce.png"
          alt=""
          width={100}
          height={100}
        />
      </div>

      <div className="img shapes">
        <div className="border-circle"></div>
        <div className="triangle"></div>
        <Image
          src="https://res.cloudinary.com/dwedz2laa/image/upload/v1733434625/brown_circle.svg_fill_u3j52w.png"
          alt=""
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default page;
