import React from "react";
import kids from "./Images/kids.png";

const Profile = () => {
  return (
    <section className='main_background'>
      <main className='enjoy_main'>
        <div className='kids_img'>
          <img src={kids} alt='' />
        </div>
        <div>
          <h1>Create profiles for kids.</h1>
          <h3>
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </h3>
        </div>
      </main>
    </section>
  );
};
export default Profile;
