import React from "react";
import tv from "./Images/tv.png";
import video from "./Video/vid.m4v";

const Enjoy = () => {
  return (
    <section className='main_background' id='enjoy'>
      <main className='enjoy_main'>
        <div className='enjoy_content enjoy_flex'>
          <h1>Enjoy on your TV.</h1>
          <h3>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </h3>
        </div>
        <div className='enjoy_img enjoy_flex'>
          <img src={tv} alt='tv' />
          <video
            className='vid'
            src={video}
            autoPlay={true}
            loop='infinite'
          ></video>
        </div>
      </main>
    </section>
  );
};
export default Enjoy;
