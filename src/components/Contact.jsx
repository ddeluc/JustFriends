import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import axios from 'axios';

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

import { contactText } from "../constants";

const demomode = true;
const demobox = demomode ? styles.demo.front : {};

const Contact = ({ setSelectedItem }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  
  const [submitMessage, setSubmitMessage] = useState();
  const [inputFieldDisabled, setInputFieldDisabled] = useState(false);

  const nameInputField = useRef();
  const emailInputField = useRef();
  const subjectInputField = useRef();
  const messageInputField = useRef();

  const postSendEmail = async () => {

    try {
      const response = await axios.post('http://localhost:5000/send/email', { name: name, email: email, subject: subject, message: message });
      setSubmitMessage(response.data.message);
      setInputFieldDisabled(true);
      // inputField.current.disabled = true;
      console.log(response.data);
    } catch (error) {
      // setSubmitMessage(error.response.data.message);
      console.error("There was an error posting the email. ", error);
    }    
  }

  return (
    <div style={demobox} className={`absolute flex justify-center inset-0 max-h-172 max-w-5xl mx-auto gap-5 my-12 font-poppins`}>  
      <div style={demobox} className={`w-7/12 flex flex-col justify-center text-[24px] mr-6`}>
        <motion.div 
          style={demobox} 
          className={`font-shrikhand text-[36px] select-none cursor-default`}
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
        >
          Contact Us
        </motion.div>
        <motion.div 
          style={demobox} 
          className={`text-[22px] cursor-default select-none`}
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{duration: 0.5, type: "spring", bounce: 0.3, delay: 0.3 }}
        >                    
          {contactText}   
        </motion.div>

        {/* --- FORM ---  */}

        <div 
          style={demobox} 
          className={`w-full flex justify-between space-x-6`}
        >
          <div className={``}>
            <input 
              style={demobox} 
              ref={nameInputField}
              type="text" 
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              className={`w-full bg-white focus:outline-none ${inputFieldDisabled ? "text-slate-500" : "text-slate-900" }  px-2.5 py-1.5 rounded-md text-[20px] font-shrikhand tracking-wider`} 
            />
            <div style={demobox} className={`h-6 text-[16px] mt-1 font-poppins italic`}>
              {submitMessage}
            </div>
          </div>
          <div>
            <input 
              style={demobox} 
              ref={emailInputField}
              type="email" 
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full bg-white focus:outline-none ${inputFieldDisabled ? "text-slate-500" : "text-slate-900" }  px-2.5 py-1.5 rounded-md text-[20px] font-shrikhand tracking-wider`} 
            />
            <div style={demobox} className={`h-6 text-[16px] mt-1 font-poppins italic`}>
              {submitMessage}
            </div>
          </div>         
        </div>
        <div>
          <input 
            style={demobox} 
            ref={subjectInputField}
            type="text" 
            placeholder="Subject"
            onChange={(e) => setSubject(e.target.value)}
            className={`w-full bg-white focus:outline-none ${inputFieldDisabled ? "text-slate-500" : "text-slate-900" }  px-2.5 py-1.5 rounded-md text-[20px] font-shrikhand tracking-wider`} 
          />
          <div style={demobox} className={`h-6 text-[16px] mt-1 font-poppins italic`}>
            {submitMessage}
          </div>
        </div>
        <div>
          <input 
            style={demobox} 
            ref={messageInputField}
            type="text" 
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
            className={`w-full bg-white focus:outline-none ${inputFieldDisabled ? "text-slate-500" : "text-slate-900" }  px-2.5 py-1.5 rounded-md text-[20px] font-shrikhand tracking-wider`} 
          />
          <div style={demobox} className={`h-6 text-[16px] mt-1 font-poppins italic`}>
            {submitMessage}
          </div>
        </div>
        
        {/* --- BUTTONS --- */}

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
            onClick={() => postSendEmail()}
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
    </div>
  );
};

export default Contact;