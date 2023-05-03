import "./team.scss";
import * as teamIMG from "../assets/Team/Team";
import { motion } from "framer-motion";
function Team() {
  return (
    <div
      className="team_parent"
      style={{ backgroundImage: `url(${teamIMG.shapes})` }}
    >
      <div
        className="team flex flex-col md:flex-row m-auto md:max-w-4xl sm:w-100"
        id="team"
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.7 }}>
          <motion.div
            animate={{ x: 0 }}
            initial={{ x: -100 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
            }}
            className="images"
            style={{ backgroundImage: `url(${teamIMG.person1})` }}
          />
          <p>It Team Lead</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.7 }}>
          <motion.div
            className="images"
            animate={{ x: 0, y: 0 }}
            initial={{ x: -100, y: -100 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
            }}
            style={{ backgroundImage: `url(${teamIMG.person2})` }}
          />
          <p>PO</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.7 }}>
          <motion.div
            animate={{ x: 0, y: 0 }}
            initial={{ x: 100, y: -100 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
            }}
            className="images"
            style={{ backgroundImage: `url(${teamIMG.person3})` }}
          />
          <p>CEO</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.7 }}>
          <motion.div
            animate={{ x: 0 }}
            initial={{ x: 100 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
            }}
            className="images"
            style={{ backgroundImage: `url(${teamIMG.person4})` }}
          />
          <p>Finance manager</p>
        </motion.div>
      </div>
      <div className="custom-shape-divider-bottom-1683095621">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}
export default Team;
