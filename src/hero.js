import React from "react";
import logo from "./Images/logo.png";
import { IoIosArrowForward } from "react-icons/io";
const Hero = () => {
  return (
    <main id='hero'>
      <nav id='navigation'>
        <img src={logo} alt='logo' />
        <button className='signup'>Sign in</button>
      </nav>
      <div className='header'>
        <h1 className='header_h1'>
          Unlimited movies, TV <br /> shows, and more.
        </h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>
      <div className='signup_div'>
        <input className='email' type='text' placeholder='Email address' />
        <button className='btn_signup'>
          Get Started <IoIosArrowForward className='icon_forward' />
        </button>
      </div>
    </main>
  );
};
export default Hero;
