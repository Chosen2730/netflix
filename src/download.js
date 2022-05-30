import React from "react";
import download from "./Images/download.jpg";
import box from "./Images/boxshot.png";
import gif from "./Video/download.gif";

const Download = () => {
  return (
    <section className='main_background'>
      <main className='download enjoy_main'>
        <div className='down_image'>
          <img src={download} alt='download' />
          <div className='box-content'>
            <img src={box} alt='' />
            <h5>Downloading...</h5>
            <img src={gif} alt='' />
          </div>
        </div>
        <div className='download_content'>
          <h1>Download your shows to watch offline.</h1>
          <h3>
            Save your favorites easily and always have something to watch.
          </h3>
        </div>
      </main>
    </section>
  );
};
export default Download;
