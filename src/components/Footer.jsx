import logo from "../assets/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      <div className="container py-20 flex flex-col md:flex-row items-center justify-between">
        <div>
          <img src={logo} alt="" className="w-40" />
          <p className="text-gray-400 text-sm md:max-w-[400px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
            excepturi impedit quod, necessitatibus similique earum.
          </p>
        </div>
        <div>
          <div className="flex space-x-6 text-3xl">
            <FaFacebook className="hover:text-primary duration-300 transform hover:-translate-y-3" />
            <FaInstagram className="hover:text-primary duration-300 transform hover:-translate-y-3" />
            <FaLinkedin className="hover:text-primary duration-300 transform hover:-translate-y-3" />
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
export default Footer;
