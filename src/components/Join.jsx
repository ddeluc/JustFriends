import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { styles } from "../styles";

import { demomode } from "../constants";

const demobox = demomode ? styles.demo.landing : {};

const Join = ({ setSelectedItem }) => {
  const [email, setEmail] = useState();
  const [submitMessage, setSubmitMessage] = useState();

  const getTest = () => {
    axios.get('http://localhost:5000')
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error("There was an error fetching the data. ", error);
      })
  }

  const postEmail = async () => {
    const testEmail = { email: "test@gmail.com"};

    try {
      const response = await axios.post('http://localhost:5000/email', { email: email });
      setSubmitMessage("User created successfully. ");
      console.log(response.data);
    } catch (error) {
      setSubmitMessage("User could not be created. ");
      console.error("There was an error posting the email. ", error);
    }
  }

  return (
    <>
      <div style={demobox} className={`w-7/12 my-12 p-6 translate-x-20 flex flex-col gap-5 text-[24px] ml-12`}>
        <div style={demobox} className={`text-[45px] font-shrikhand mb-6`}>
          Subscribe to our Newsletter.
          <div style={demobox} className={`font-poppins text-[24px]`}>
            Join the family and stay updated.
          </div>
        </div>
        <input 
          style={demobox} 
          type="text" 
          placeholder="Email"
          onChange={(e) => {setEmail(e.target.value); console.log(email);}}
          className={`w-full bg-white focus:outline-none text-slate-900 px-2.5 py-1.5 rounded-md text-[20px] font-shrikhand tracking-wider`} 
        />
        <div style={demobox} className={`flex justify-end font-shrikhand`}>
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