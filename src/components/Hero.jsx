import hero from "../assets/hero.png";
import { motion } from "framer-motion";
import { SlideLeft, SlideUp, SlideRight } from "../animations";
const Hero = () => {
  return (
    <section className="">
      <div className="bg-brandWhite rounded-3xl container grid grid-cols-1 gap-6 min-h-[650px] md:grid-cols-2">
        {/* Text info */}
        <div className="flex flex-col justify-center xl:pr-40">
          <div className="mt-24 mb-10 md:mt-0 md:mb-0 space-y-4 text-center md:text-left">
            <motion.h1
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-5xl font-bold text-darkBlue"
            >
              COVID-19 Risk <br />
              Assessment Tool
            </motion.h1>
            <motion.p
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className="text-lg text-gray-400 mt-4"
            >
              A set of solutions designed to help quickly identify coronavirus
              symptoms and get reliable information regarding COVID-19 concerns
            </motion.p>
            <motion.div
              variants={SlideUp(0.8)}
              initial="initial"
              whileInView="animate"
              className="bg-primary text-white px-6 py-4 rounded-lg mt-4 mx-auto md:mx-0 w-fit font-bold hover:shadow-lg duration-300"
            >
              <button>See how to use it</button>
            </motion.div>
          </div>
        </div>
        {/* image section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center"
        >
          <img src={hero} alt="" />
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
