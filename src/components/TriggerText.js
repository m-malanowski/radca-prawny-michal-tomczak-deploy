import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";

const TriggerText = ({children}) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: false
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    // else{
    //   controls.start("hidden");
    // }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0,
          transition: { delay: .2, duration: .5}
        },
        hidden: { opacity: 0, y: -20 }
      }}
      // variants={{
      //   visible: {
      //     opacity: 1, y: 0,
      //     transition: { delay: .4, duration: .6,  }
      //   },
      //   hidden: { opacity: 0, y: -40, }
      // }}
    >
      {children}
    </motion.div>
  );
};
export default TriggerText