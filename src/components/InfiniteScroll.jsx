import React, { useState, useEffect, useRef } from "react";
import { motion } from 'framer-motion';

const InfiniteScroll = ({
  children,
  speed = 10,
}) => {
  const [width, setWidth] = useState(0);
  const scrollerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setWidth(contentRef.current.offsetWidth);
    }
  }, [children]);

  return (
    <div ref={scrollerRef} className={`overflow-hidden whitespace-nowrap py-4 bg-yellow-400`}>
      <motion.div
        className="inline-block"
        ref={contentRef}
        animate={{
          x: [-width, 0] ,
        }}
        transition={{
          duration: width / (speed * 10),
          repeat: Infinity,
          ease: 'linear',
          repeatType: "loop",
        }}
      >
        {children}
        {children}
        {children}
        {children}
      </motion.div>      
    </div>
  )
}

export default InfiniteScroll;