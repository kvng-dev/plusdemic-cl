import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import { motion } from "framer-motion";
import { SlideUp } from "../animations";

const Trust = () => {
  return (
    <section className="bg-brandWhite py-16 mt-0">
      <div className="container">
        <motion.h1
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          className="py-6 text-4xl font-bold text-darkBlue text-center"
        >
          Why you can trust this tool
        </motion.h1>
        <div className="flex md:flex-col flex-col xl:flex-row xl:items-center xl:justify-center gap-6">
          <motion.div
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="space-y-6 text-center md:text-left md:px-32"
          >
            <img src={icon1} className="mx-auto" alt="" />
            <p className="text-3xl font-semibold">Based on reliable sources</p>
            <p className="">
              We want our tool to be safe and reliable, so its logic is based on
              the official global information provided by the WHO
            </p>
            <p className="text-sm text-gray-400">
              Enhance your preliminary diagnosis and triage with pedriatic
              content{" "}
              <a href="" className="text-primary">
                Learn more
              </a>
            </p>
          </motion.div>
          <motion.div
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="space-y-6 text-center md:text-left md:px-32"
          >
            <img src={icon2} className="mx-auto" alt="" />
            <p className="text-3xl font-semibold">Based on reliable sources</p>
            <p className="">
              We want our tool to be safe and reliable, so its logic is based on
              the official global information provided by the WHO
            </p>
            <p className="text-sm text-gray-400">
              Enhance your preliminary diagnosis and triage with pedriatic
              content{" "}
              <a href="" className="text-primary">
                Learn more
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Trust;
