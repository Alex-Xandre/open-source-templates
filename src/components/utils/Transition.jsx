import {
  motion,
  useInView,
  useAnimation,
  easeIn,
  easeInOut,
} from "framer-motion";
import { useEffect, useRef } from "react";

export const Transition = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      style={{ position: "relative", width, overflow: "hidden" }}
      className=" bg-transparent m-0 "
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25, ease: easeIn }}
      >
        {children}
      </motion.div>
    </div>
  );
};
