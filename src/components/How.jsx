import Card from "./Card";
import icon1 from "../assets/icon/1.png";
import icon2 from "../assets/icon/2.png";
import icon3 from "../assets/icon/3.png";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../animations";

const How = () => {
  return (
    <section>
      <div className="container py-16">
        <div
          className="grid grid-cols-1 gap-6
         md:grid-cols-3"
        >
          <div className="col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              <motion.div
                variants={SlideRight(0.2)}
                initial="initial"
                whileInView="animate"
              >
                <Card
                  icon={icon1}
                  heading="Symptoms"
                  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid unde quisquam"
                />
              </motion.div>
              <motion.div
                variants={SlideRight(0.4)}
                initial="initial"
                whileInView="animate"
              >
                <Card
                  icon={icon2}
                  heading="Recommendations"
                  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid unde quisquam"
                />
              </motion.div>
              <motion.div
                variants={SlideRight(0.6)}
                initial="initial"
                whileInView="animate"
              >
                <Card
                  icon={icon3}
                  heading="Local Information"
                  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid unde quisquam"
                />
              </motion.div>
            </div>
          </div>
          <motion.div
            variants={SlideLeft(0.8)}
            initial="initial"
            whileInView="animate"
            className="flex flex-col justify-center xl:pr-14"
          >
            <h1 className="text-3xl font-bold text-darkBlue">
              How it Helps people
            </h1>
            <p className="text-gray-400 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              <a className="text-primary" href="#">
                Learn More
              </a>
            </p>
            <button className="w-fit mt-4 border border-gray-400 py-2 px-4 rounded-lg hover:bg-primary hover:text-white transform duration-500">
              Get in Touch
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default How;
