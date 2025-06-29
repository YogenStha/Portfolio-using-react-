import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb} from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoJavascript } from "react-icons/bi";
import {motion} from "framer-motion";

const iconVariants= (duration) => ({
    initial: {y: -10},
    animate: {
      y: [10,-10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      }
    }
  })


const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
      whileInView={{ opacity: 1, y: 0}}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap justify-center gap-4 items-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
        className="p-4">
          <BiLogoJavascript className="text-7xl text-cyan-400" />
          </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
        className="p-4">
          <TbBrandNextjs className="text-7xl " />
        </motion.div>
        <motion.div
        initial="initial"
          animate="animate"
          variants={iconVariants(2)}
        className="p-4">
          <SiMongodb className="text-7xl text-cyan-500" />
        </motion.div>
        <motion.div
        initial="initial"
          animate="animate"
          variants={iconVariants(4)}
        className="p-4">
        <SiTailwindcss className="text-7xl text-cyan-500"/>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default Technologies;