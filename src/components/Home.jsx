import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { styles } from "../styles";
import { demomode } from "../constants";

import Navbar from "./Navbar";
import Footer from "./Footer";

import grain from "../assets/videos/Effects/grainVid1.mp4"

// import dj from "https://drive.google.com/uc?export=download&id=1QSZ6bvSDjYAH951atjxtYWf2BgaYoOox"
const dj = "https://res.cloudinary.com/dkynzp3h6/image/upload/v1758502251/dj_yhczx4.png"
import handShake from "../assets/images/people/cutout/whiteOutline/handShake.png";
import man from "../assets/images/people/cutout/whiteOutline/man.png";
import saxaphone from "../assets/images/people/cutout/whiteOutline/saxaphone.png";
import girlTalking from "../assets/images/people/cutout/whiteOutline/girlTalking.png";
import manHoldingProduct from "../assets/images/people/cutout/whiteOutline/manHoldingProduct.png";
import couple from "../assets/images/people/cutout/whiteOutline/couple.png"
import { aboutText } from "../constants";

import { HannyaCanvas } from "./canvas";
import { homePanels } from "../constants";
import HomePanel from "./HomePanel";

const demobox = demomode ? styles.demo.landing : {};

const Home = ({}) => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });
  
  return (
    <section 
      className={`relative w-[100wh] h-[350vh] bg-primary`}
      style={demobox}
      ref={container}
      key={1}
    >

      <Hero parentScrollYProgress={scrollYProgress} />
      
      <div id="menu" className={`relative w-full h-[100vh] flex gap-2 bg-primary`}>
        <Navbar />
        <HomePanel vidSrc={homePanels[0].vidSrc} titleEng={homePanels[0].titleEng} titleJap={homePanels[0].titleJap} link={homePanels[0].link} />
        <HomePanel vidSrc={homePanels[1].vidSrc} titleEng={homePanels[1].titleEng} titleJap={homePanels[1].titleJap} link={homePanels[1].link} />
        <HomePanel vidSrc={homePanels[2].vidSrc} titleEng={homePanels[2].titleEng} titleJap={homePanels[2].titleJap} link={homePanels[2].link} />
        <div className={`absolute top-0 left-0 w-full h-full max-h-[100vh] ${demomode ? 'border-purple-600 border-2' : ''}`}>
          <HannyaCanvas hScale={15} hpx={0} hpy={-0.35} hpz={0} />
        </div>
      </div>
      <Footer />
    </section>    
  );
};

const Hero = ({ parentScrollYProgress }) => {
  const videoGrainRef = useRef();
  const container = useRef();

  const opacity = useTransform(parentScrollYProgress, [0.66, 0.75], [1, 0]);
  const aboutTextOpacity = useTransform(parentScrollYProgress, [0, 0.25, 0.6, 0.75], [0, 1, 1, 0]);
  const imagePositionY = useTransform(parentScrollYProgress, [0, 0.33], ["0%", "100%"]);
  const titlePositionY = useTransform(parentScrollYProgress, [0, 0.33], ["0%", "-25%"]);
  const titleScale = useTransform(parentScrollYProgress, [0, 0.33], [1, 0.33]);
  
  useEffect(() => {
    if (videoGrainRef.current) {
      videoGrainRef.current.playbackRate = 0.35;
    }
  }, []);

  return (
    <motion.div className={`sticky top-0 w-full h-[250vh] bg-primary`}
      ref={container}
    >
      <video
        style={demobox}
        className={`top-0 left-0 w-full h-full absolute object-cover opacity-20`}
        src={grain}
        ref={videoGrainRef} 
        autoPlay  
        loop
        muted
      />
      <div className={`sticky top-0 w-full h-[100vh] flex flex-col`}>
        <motion.div className={`flex justify-center h-[50vh] items-center ${demomode ? 'border-blue-600 border-2' : ''}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 }}}
          style={{ opacity: opacity}}
        >
          <motion.span className={`font-mochiy font-bold text-[15vw] text-red-600 drop-shadow-glow-red-lg`}
            style={{ y: titlePositionY, scale: titleScale }}
          >
            コネクション
          </motion.span>
        </motion.div>

        <motion.div className={`absolute flex flex-col top-0 h-full items-center justify-center`}>
          <motion.p className={`font-noto-mono text-[18px] max-w-6/20 font-light text-center`}
            style={{ opacity: aboutTextOpacity }}  
          >
            {aboutText}
          </motion.p>
        </motion.div>
       
        <div className={``}>
          <motion.img src={girlTalking} alt="DJ" className={`absolute bottom-1/20 left-[10%] grayscale w-[26vw] brightness-60 drop-shadow-xl`} 
            style={{ y: imagePositionY, rotate: 2 }}
          />
          
          <motion.img src={dj} alt="DJ" className={`absolute -bottom-[8%] -left-[5%] grayscale w-[35vw] brightness-60 drop-shadow-xl`} 
            style={{ y: imagePositionY, rotate: 2 }}
          />

          <motion.img src={saxaphone} alt="DJ" className={`absolute -bottom-3/20 rotate-3 right-[2%] grayscale w-[32vw] brightness-60 drop-shadow-xl`} 
            style={{ y: imagePositionY, rotate: -4 }}
          />

          <motion.img src={manHoldingProduct} alt="DJ" className={`absolute -bottom-16 rotate-3 right-6/20 grayscale w-[28vw] brightness-60 drop-shadow-xl`} 
            style={{ y: imagePositionY }}
          />

          <motion.img src={man} alt="DJ" className={`absolute rotate-3 bottom-0 right-0 grayscale w-[30vw] brightness-60 drop-shadow-xl`}  
            style={{ y: imagePositionY }}
          />

          <motion.img src={couple} alt="DJ" className={`absolute bottom-0 right-4/20 grayscale w-[28vw] brightness-60 drop-shadow-xl`} 
            style={{ y: imagePositionY }}
          />

          <motion.img src={handShake} alt="DJ" className={`absolute bottom-0 rotate-8 left-4/20 grayscale w-[32vw] brightness-60 drop-shadow-xl`} 
            style={{ y: imagePositionY }}
          />
        </div>
        
      </div>
      
      
    </motion.div>
  )
}

export default Home;