import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

function HeroApp() {
  const textControls = useAnimation();
  const controlsTwo = useAnimation();

  useEffect(() => {
    textControls.start("visible");
    controlsTwo.start("animate");
  }, [textControls, controlsTwo]);

  const animatedTextOne = "Andra";
  const animatedTextTwo = "Renandra";

  const titleOne = animatedTextOne.split(" ").map((word, wordIndex) => (
    <motion.div
      key={wordIndex}
      className="inline-block"
    >
      {word.split("").map((char, charIndex) => (
        <motion.span
          key={charIndex}
          variants={{
            hidden: { opacity: 0, y: 50 },
            animate: {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                damping: 8,
                stiffness: 100,
              },
            },
          }}
          className="inline-block w-[1ch]"
        >
          {char}
        </motion.span>
      ))}
      {wordIndex !== animatedTextOne.split(" ").length - 1 && (
        <motion.span
          key={`space-${wordIndex}`}
          variants={{
            hidden: { opacity: 0, y: 0 },
            animate: {
              opacity: 1,
              transition: {
                duration: 0.1,
              },
            },
          }}
          className="inline-block w-[0.5ch]"
        >
          &nbsp;
        </motion.span>
      )}
    </motion.div>
  ));

  const titleTwo = animatedTextTwo.split(" ").map((word, wordIndex) => (
    <motion.div
      key={wordIndex}
      variants={{
        hidden: { opacity: 0, y: 20 },
        animate: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 8,
            stiffness: 100,
            staggerChildren: 0.04,
          },
        },
      }}
      className="inline-block"
    >
      {word.split("").map((letter, letterIndex) => (
        <motion.span
          key={letterIndex}
          variants={{
            hidden: { opacity: 0, y: 50 },
            animate: {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                damping: 8,
                stiffness: 100,
              },
            },
          }}
        >
          {letter}
        </motion.span>
      ))}
      {wordIndex !== animatedTextTwo.split(" ").length - 1 && (
        <motion.span
          key={`space-${wordIndex}`}
          variants={{
            hidden: { opacity: 0, y: 0 },
            animate: {
              opacity: 1,
              transition: {
                duration: 0.1,
              },
            },
          }}
          className="inline-block w-[0.5ch]"
        >
          &nbsp;
        </motion.span>
      )}
    </motion.div>
  ));

  return (
    <div className="relative flex justify-center items-center h-[80vh] font-Poppins overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-#EEEEEE opacity-0 animate-opacity-80"
      />
      <div className="text-9xl text-gray-700 font-bold font-Poppins flex flex-col items-center justify-center text-#272828 text-center z-1">
        <motion.div
          className="heroTitle"
          variants={{
            hidden: { opacity: 1 },
            animate: {
              opacity: 1,
              transition: {
                staggerChildren: 0.04,
              },
            },
          }}
          initial="hidden"
          animate={controlsTwo}
        >
          {titleOne}
        </motion.div>
        <motion.div
          className="heroTitleTwo"
          variants={{
            hidden: { opacity: 1 },
            animate: {
              opacity: 1,
              transition: {
                staggerChildren: 0.04,
              },
            },
          }}
          initial="hidden"
          animate={controlsTwo}
        >
          {titleTwo}
        </motion.div>
        <motion.div
          className="bg-cyan-600 w-80 h-2 mt-20"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { scaleX: 0 },
            visible: {
              scaleX: 1,
              transition: {
                duration: 0.6,
                ease: "easeInOut",
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default HeroApp;
