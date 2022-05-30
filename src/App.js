import React from "react";
import Hero from "./hero";
import Download from "./download";
import Faq from "./faq";
import Enjoy from "./enjoy";
import Watch from "./watch";
import Profile from "./profile";
import Footer from "./footer";

const App = () => {
  return (
    <>
      <Hero />
      <hr className='line' />
      <Enjoy />
      <hr className='line' />
      <Download />
      <hr className='line' />
      <Watch />
      <hr className='line' />
      <Profile />
      <hr className='line' />
      <Faq />
      <hr className='line' />
      <Footer />
    </>
  );
};
export default App;
