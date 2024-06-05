import React from "react"
import { motion } from "framer-motion"

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      dalay: 0.6,
      staggerChildren: 0.15,
    }
  }
};
const singrWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    }
  }
};

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center text-center justify-center overflow-hidden ">
      <motion.h1 className={`inline-block w-full text-dark font-bold text-5xl ${className} dark:text-light `}
        variants={quote} initial="initial" animate="animate" >
        {
          text.split(" ").map((word, index) =>
            <motion.span key={word + "-" + index} className="inline-block" variants={singrWord}  >
              {word}&nbsp;
            </motion.span>

          )}
      </motion.h1>
    </div>
  )
}

export default AnimatedText