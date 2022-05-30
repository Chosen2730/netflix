import React, { useState } from "react";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { useGlobalContext } from "./context";
import { faqs } from "./data";

const Singlefaq = ({ p, quest, ans }) => {
  const [show, setShow] = useState(false);
  const second_p = p || null;

  return (
    <>
      <div className='single_faq' onClick={() => setShow(!show)}>
        <div className='single_faq_main'>
          <h5>{quest}</h5>
          <button>{show ? <AiOutlineClose /> : <AiOutlinePlus />}</button>
        </div>
        {show && (
          <p>
            {ans} <br />
            <br />
            {second_p}
          </p>
        )}
      </div>
    </>
  );
};
export default Singlefaq;
