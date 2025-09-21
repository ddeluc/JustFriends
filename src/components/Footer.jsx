import React from "react";
import { motion } from "framer-motion";

const Footer = ({}) => {

  return (
    <footer className={`absolute bottom-0 justify-between w-full bg-transparent z-50 py-3 px-3 flex font-noto-mono text-[14px]`}>
        <div className={`font-noto-mono font-light`}>
          {`© 2025 Just Friends. All rights reserved.`}
        </div>
        <div className={`font-noto-mono font-light`}>
          {`Site by dante.deluca.dev@gmail.com`}
        </div>
    </footer>
  );
}

export default Footer;