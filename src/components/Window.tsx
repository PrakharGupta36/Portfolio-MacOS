import { ReactElement, useState } from "react";
import { motion } from "framer-motion";
import { isMobile, isTablet } from "react-device-detect";

export default function Window({ children }: { children: ReactElement }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const isTouch = isMobile || isTablet;

  return (
    <motion.main
      drag
      dragConstraints={{
        left: -Infinity,
        right: Infinity,
        top: -Infinity,
        bottom: Infinity,
      }}
      dragMomentum={false}
      className='window'
      style={{
        zIndex: isFocused ? 3 : 1,
        position: isTouch ? "relative" : "absolute",
      }}
      tabIndex={0}
      onFocusCapture={handleFocus}
      onBlur={handleBlur}
    >
      {children}
    </motion.main>
  );
}
