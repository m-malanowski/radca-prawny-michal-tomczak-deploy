import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
const TriggerText = ({children, threshold}) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: .7,
    // triggerOnce: false
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      // {console.log(inView)}
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
      exit="hidden"
      variants={{
        // visible: { opacity: 1, y: 0, clipPath: "circle(450% at 100% 100%)",
        visible: { opacity: 1, y: 0,
            transition: { delay: .2, duration: 1.2}
        },
        hidden: { opacity: 0, y: -20 }
        // hidden: { opacity: 0, y: -20, clipPath: "circle(16.2% at 48% 0)" }
      }}
    >
      {children}
    </motion.div>
  );
};
export default TriggerText