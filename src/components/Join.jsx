import { animate, motion } from "framer-motion";
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import { styles } from "../styles";

import { demomode } from "../constants";

const demobox = demomode ? styles.demo.landing : {};

const Join = ({ setSelectedItem }) => {
  const [email, setEmail] = useState();
  const [submitMessage, setSubmitMessage] = useState();
  const [inputFieldDisabled, setInputFieldDisabled] = useState(false);
  const inputField = useRef();

  const getTest = () => {
    axios.get('http://localhost:5000')
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error("There was an error fetching the data. ", error);
      })
  }

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  }

  const postEmail = async () => {

    try {
      const response = await axios.post('http://localhost:5000/email', { email: email });
      setSubmitMessage(response.data.message);
      setInputFieldDisabled(true);
      inputField.current.disabled = true;
      console.log(response.data);
    } catch (error) {
      setSubmitMessage(error.response.data.message);
      console.error("There was an error posting the email. ", error);
    }    
  }

  return (
    <>
      <div style={demobox} className={`w-11/20 my-12 p-6 translate-x-20 flex flex-col gap-2 text-[24px] ml-16 select-none`}>
        <div 
          style={demobox} 
          className={`text-[45px] font-shrikhand mb-6`}
        >
          <motion.div
            style={demobox} 
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
          >
            Subscribe to our Newsletter.
          </motion.div>          
          <motion.div 
            style={demobox} 
            className={`font-poppins text-[24px]`}
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.3, delay: 0.3 }}
          >
            Join the family and stay updated.
          </motion.div>
        </div>
        <div 
          style={demobox} 
          className={`w-full`}
        >
          <input 
            style={demobox} 
            ref={inputField}
            type="email" 
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full bg-white focus:outline-none ${inputFieldDisabled ? "text-slate-500" : "text-slate-900" }  px-2.5 py-1.5 rounded-md text-[20px] font-shrikhand tracking-wider`} 
          />
          <div style={demobox} className={`h-6 text-[16px] mt-1 font-poppins italic`}>
            {submitMessage}
          </div>
        </div>
        
        <div style={demobox} className={`flex justify-between font-shrikhand`}>
          <motion.div 
            style={demobox} 
            className={`w-max cursor-pointer select-none`} 
            initial="initial" 
            whileHover="hovered"
            onClick={() => setSelectedItem("None")}
            variants={{
              hovered: { opacity: 1, x: "-10%" }
            }}
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2
            }}
          >
            BACK
          </motion.div>
          <motion.div 
            style={demobox} 
            className={`w-max cursor-pointer select-none`} 
            initial="initial" 
            whileHover="hovered"
            onClick={() => postEmail()}
            variants={{
              hovered: { opacity: 1, x: "10%" }
            }}
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2
            }}
          >
            SUBMIT
          </motion.div>
        </div>
      </div>
    </>
    
  );
};

export default Join;