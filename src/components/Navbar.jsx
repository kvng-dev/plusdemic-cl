import { motion } from "framer-motion";
import logo from "../assets/logo.png";


const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <div className="container py-5 flex items-center justify-between">
        {/* logo section */}
        <div>
          <img src={logo} alt="" className="w-40" />
        </div>
        {/* Navlinks section */}
        <ul className="md:flex items-center gap-5 hidden ">
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">Customer Stories</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Blogs</a>
          </li>

          {/* Button section */}
          <button className="border border-gray-400 py-2 px-4 rounded-lg hover:bg-primary hover:text-white transform duration-500">
            Get in touch
          </button>
        </ul>
      </div>
    </motion.header>
  );
};
export default Navbar;
