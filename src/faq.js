import React from "react";
import { faqs } from "./data";
import Singlefaq from "./singlefaq";
import { IoIosArrowForward } from "react-icons/io";

const Faq = () => {
  return (
    <section className='main_background'>
      <div className='faq'>
        <h1>Frequently Asked Questions</h1>
        <div className='faq_container'>
          {faqs.map((faq, index) => {
            return <Singlefaq key={index} {...faq} />;
          })}
        </div>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className='signup_div'>
          <input className='email' type='text' placeholder='Email address' />
          <button className='btn_signup'>
            Get Started <IoIosArrowForward className='icon_forward' />
          </button>
        </div>
      </div>
    </section>
  );
};
export default Faq;
