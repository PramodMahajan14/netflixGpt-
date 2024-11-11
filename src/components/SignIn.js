import React, { useState } from "react";
import Header from "./Header";
import "./common.css";
import FormSignInSignUp from "./FormSignInSignUp";
import Footer from "./Footer";
const SignIn = () => {
  const [Ismobile, Setmobile] = useState(true);
  return (
    <div className="hero  block w-full overflow-x-hidden h-full relative">
      <div className="sm:fixed sm:top-0 sm:-z-10 sm:h-full sm:sw-full">
        <div className="absolute  top-0 z-[-2] h-screen w-screen  bg-black"></div>
      </div>

      <div className="h-20 w-full">
        <Header />
      </div>
      <div className=" w-full sm:w-[80%] lg:w-[30%] md:w-[50%]  m-auto  max-h-auto rounded-md bg-[rgba(0,0,0,0.7)]">
        <FormSignInSignUp />
      </div>
      <div className="w-screen bg-black opacity-70 mt-4">
        <Footer />
      </div>
    </div>
  );
};

export default SignIn;
